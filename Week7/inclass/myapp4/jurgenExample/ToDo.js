import React, { Component } from 'react';
import Task from "./Task"

class ToDo extends Component {
  constructor(props) {
    super(props)
    this.updateToDoList = this.updateToDoList.bind(this)
    this.state = {tasks: props.tasks}
  }
  
  updateToDoList(indexN) {
    debugger  
    /***  
      State shouldn't be modified directly and splice 
      modifies the orginal array it's called on. 
      Therefore we're using the spread operator to copy the array first. ;)
    ***/
    var newTaskList = [...this.state.tasks]
    newTaskList.splice(indexN, 1)
    this.setState({tasks: newTaskList})

    if(newTaskList.length === 0) {
        debugger
        this.props.removeToDo(this.props.index)
    }
  }

  render() {
    debugger
    return (
    <div>
    <h1>{this.props.title}</h1>
    {this.state.tasks.map((aTask, index) => 
        <Task removeCompleteList={this.props.removeToDo} index={index.toString()} deleteTask={this.updateToDoList} key={aTask + index.toString()} taskName={aTask} />
    )}
    </div>
    )
  }
}

export default ToDo;
