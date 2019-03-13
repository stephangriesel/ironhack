import React, { Component } from 'react';

class Task extends Component {

render() {
  return (
    <h1 onClick={()=>{this.props.deleteTask(this.props.index)}}>{this.props.taskName}</h1>
    )
  }
}

export default Task;
