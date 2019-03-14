import React, { Component } from 'react';
import ToDo from "./ToDo"

class MasterPlan extends Component {
  constructor(props) {
    super(props)
    this.state = {
        lists: [
                {title: "ShoppingList", tasks: ["Milk", "Butter"]}, 
                {title: "Chores", tasks: ["Vacuum cleaning", "Laundry", "Cooking"]}
              ] 
        }
    this.removeList = this.removeList.bind(this)    
  }

  removeList(indexList){
    var newToDoLists = [...this.state.lists]
    newToDoLists.splice(indexList, 1)
    debugger
    this.setState({lists: newToDoLists})
  }

  render() {
    debugger
    return (

      <div>
        {this.state.lists.map((todo, index)=> 
          <ToDo index={index} removeToDo={this.removeList} title={todo.title} tasks={todo.tasks} />
        )}

      </div>
    )
  }
}



export default MasterPlan