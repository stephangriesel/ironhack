import React, { Component } from 'react';

class Task extends Component {

render() {
  return (
    <p onClick={()=>{this.props.removeCompleteList()}}> {this.props.taskName}</p>
    )
  }
}

export default Task;
