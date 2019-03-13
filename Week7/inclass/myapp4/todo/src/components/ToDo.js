import React, { Component } from 'react';
import Task from "./Task"

class ToDo extends Component {
  constructor() {
    super()
    this.updateToDoList = this.updateToDoList.bind(this)
  }

  state = {
    tasks: ["Task1", "Task2", "Task3"],
    
  }

  updateToDoList(indexN) {
    /***  
      State shouldn't be modified directly and splice 
      modifies the orginal array it's called on. 
      Therefore we're using the spread operator to copy the array first. ;)
    ***/
    var newTaskList = [...this.state.tasks]
    newTaskList.splice(indexN, 1)
    this.setState({tasks: newTaskList})
  }

  render() {
    return (
      <div>
        {this.state.tasks.map((aTask, index) => 
          <Task index={index.toString()} deleteTask={this.updateToDoList} key={aTask + index.toString()} taskName={aTask} />
        )}
      </div>
    )
  }
}

export default ToDo;
