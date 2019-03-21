import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditProject from './EditProject';

class ProjectDetails extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  componentDidMount(){ // componentDidMount() is executing getSingleProject() method which initially communicates with our backend route through axios call. If everything is successful, we are updating the state (using nothing but setState()) and equaling it to the project object we got from our API.
      this.getSingleProject();
  }

  getSingleProject = () => {
      const { params } = this.props.match;
      axios.get(`http://localhost:5000/api/projects/${params.id}`)
      .then( responseFromApi =>{
          const theProject = responseFromApi.data;
          this.setState(theProject);
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  // Edit form helper

  renderEditForm = () => {
    if(!this.state.title){
      this.getSingleProject();
    } else {
    //                                                    {...props} => so we can have 'this.props.history' in Edit.js
    //                                                                                          ^
    //                                                                                          |
      return <EditProject theProject={this.state} getTheProject={this.getSingleProject} {...this.props} />
        
    }
  }


  render(){ // accessing to project’s properties through this.state.title and this.state.description.
    return(
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <div>{this.renderEditForm()}</div> {/* called inside the render() method and what it does is basically this: checks if this.state has any properties (we picked title), and if that’s true, it’s invoking the getSingleProject() method which gets the project object from our API and sets it to the state of the component. On the next execution of renderEditForm(), it’s rendering <EditProject /> component with props passed down to itself.*/}
        <Link to={'/projects'}>Back to projects</Link>
      </div>
    )
  }
}

export default ProjectDetails;