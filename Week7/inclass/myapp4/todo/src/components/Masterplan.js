import React, { Component } from 'react'
import ShoppingList from './ShoppingList'

class MasterPlan extends Component {
    constructor() {
        super()
        this.showLists = this.showLists.bind(this)
    }
    state = {
            shoppingLists: [
            { title: "Shopping List", items: ["Milk", "Hummus", "Soap"]},
            { title: "Chores", items: ["Walk the dog", "Smell flowers", "Eat flowers"]}
            ]
    }




    showLists() {
        var newLists = [...this.state.shoppingLists]
        console.log(newLists)
        return newLists.map((list, index)=> {
            return(
                <div>
                    <ShoppingList data={list} index={index}/>
                </div>
            )
        }) 
    }

  render() {
    return (
      <div className="lists">
          {this.showLists()}
      </div>
    )
  }
}

export default MasterPlan