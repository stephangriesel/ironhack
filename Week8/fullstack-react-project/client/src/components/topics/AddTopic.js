import React, { Component } from 'react';
import axios from 'axios';
import '../../css/AddTopic.css';
import '../../css/Animate.css';

class AddTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      title: "",
      description: "",
      owner: "",
    };
    // this.service = new AuthService();
    // debugger
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
    console.log("this is addtopic", this);
    // debugger
  }

  logoutUser = () => {
    this.service.logout()
      .then(() => {
        this.setState({ loggedInUser: null });
        this.props.getUser(null);
      })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const owner = this.state.owner;
    axios.post(`${process.env.REACT_APP_API_URL}/api/topics`,
      {
        title, description, owner
      },
      {
        withCredentials: true
      }
    )
      .then(() => {
        this.props.getData();
        this.setState({ title: "", description: "", owner: "" });
        // debugger
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  toggleForm = () => {
    if (!this.state.isShowing) {
      this.setState({ isShowing: true });
    } else {
      this.setState({ isShowing: false });
    }
  }

  showAddTopicForm = () => {
    if (this.state.isShowing) {
      return (
        <div className="addTopic-wrapper animated bounceInUp">
          <form onSubmit={this.handleFormSubmit}>
            <div className="topicTitle">
              <input maxLength="50" type="text" name="title" placeholder="... start a discussion" value={this.state.title} onChange={e => this.handleChange(e)} />
            </div>
            <div className="topicDesc">
                  <textarea maxLength={200} name="description" value={this.state.description} onChange={e => this.handleChange(e)} />
            </div>
            <button type="submit" value="Submit">SUBMIT</button>
          </form>
        </div>
      )
    }
  }

  // SHOW BUTTON IF LOGGED IN
  // Not working but nice try, something to improve in version 2

  render() {
    // debugger
    if (this.state.loggedIn) {
      // debugger
      return (
        <div className="addTopic-wrapper">
          <button onClick={() => this.toggleForm()}>
            <i className="far fa-comments"></i> Join the discussion</button>
          {this.showAddTopicForm()}
        </div>
      )
    } else {
      return (
        <div className="addTopic-wrapper">
        <button onClick={() => this.toggleForm()}>
          <i className="far fa-comments"></i> Join the discussion</button>
        {this.showAddTopicForm()}
      </div>
      )
    }
  }
}

export default AddTopic;