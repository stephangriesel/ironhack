import React, { Component } from 'react';
import Item from './Item';

class ShoppingList extends Component {

    constructor() {
        super()
        this.updateShoppingList = this.updateShoppingList.bind(this)
    }

    state = {
        items: ["Milk", "Soya", "Legumes"]
    }

    updateShoppingList(indexNumber){ // new function for updated shopping list
        var newShoppingList = [...this.state.items] // define newShoppingList to safely splice it, avoid altering current state directly
        newShoppingList.splice(indexNumber, 1) // splice array single item (1)
        this.setState({items: newShoppingList}) // set state with new array 
    }

    render() {
        return (
            <div>
                {this.state.items.map((anItem, index) =>
                    <Item name={anItem} index={index.toString()} deleteItem={this.updateShoppingList}/>


                )}
            </div>
        )
    }
}


export default ShoppingList;