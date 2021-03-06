import React, { Component } from 'react';
import axios from 'axios';
import '../../css/EditTopic.css';


class EditTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.theTopic.title,
      description: this.props.theTopic.description
    }
  }


  handleFormSubmit = (event) => {
    const title = this.state.title;
    const description = this.state.description;

    event.preventDefault();

    axios.put(`${process.env.REACT_APP_API_URL}/api/topics/${this.props.theTopic._id}`,
      {
        title, description
      },
      {
        withCredentials: true
      }
    )
      .then(() => {
        this.props.getTheTopic();
        this.props.history.push('/'); 

      })
      .catch(error => console.log(error))
  }

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleChangeDesc = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  toggleForm = () => {
    if (!this.state.isShowing) {
      this.setState({ isShowing: true });
    } else {
      this.setState({ isShowing: false });
    }
  }

  showEditTopicForm = () => {
    if (this.state.isShowing) {
      return (
        <div className="editTopic-wrapper animated bounceInUp">
          <form onSubmit={this.handleFormSubmit}>
            <div className="topicTitle">
              <input type="text" name="title" value={this.state.title} onChange={e => this.handleChangeTitle(e)} />
            </div>
            <div className="topicDesc">
              <textarea name="description" value={this.state.description} onChange={e => this.handleChangeDesc(e)} />
            </div>
            <button type="submit" value="Submit">APPLY CHANGE</button>
          </form>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="editTopic-wrapper">
          <button onClick={() => this.toggleForm()}><i className="far fa-edit"></i>EDIT YOUR TOPIC</button>
          {this.showEditTopicForm()}
      </div>
    )
  }
}

export default EditTopic;