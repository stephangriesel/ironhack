import React, { Component } from 'react'
import Item from './Item'

class ShoppingList extends Component {
    constructor(props) {
        super(props)
        this.updateShoppingList = this.updateShoppingList.bind(this)
        this.state = {
            list: this.props.data,
            items: this.props.data.items
        }
    }

    updateMasterClass() {
        if (this.state.items === 0) {
            
        } 
    }

    updateShoppingList(indexN) {
        var newShoppingList = [...this.state.items]
        newShoppingList.splice(indexN, 1)
        console.log(newShoppingList)
        this.setState({ items: newShoppingList })
    }

    render() {
        return (
            <div>
                <h1 className='title'>{this.state.list.title}</h1>
                {this.state.items.map((anItem, index) =>
                    <Item index={index.toString()} deleteItem={this.updateShoppingList} itemName={anItem} key={anItem + index.toString()} />
                )}
            </div>
        )
    }
}

export default ShoppingList


// import React, { Component } from 'react';
// import Item from './Item';

// class ShoppingList extends Component {

//     constructor() {
//         super()
//         this.updateShoppingList = this.updateShoppingList.bind(this)
//     }

//     state = {
//         items: ["Milk", "Soya", "Legumes"],
//         // chores: ["Walk Dog", "Eat Grass", "Smell Flowers"]
//     }

//     updateShoppingList(indexNumber){ // new function for updated shopping list
//         var newShoppingList = [...this.state.items] // define newShoppingList to safely splice it, avoid altering current state directly
//         newShoppingList.splice(indexNumber, 1) // splice array single item (1)
//         this.setState({items: newShoppingList}) // set state with new array 
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.items.map((anItem, index) =>
//                     <Item name={anItem} index={index.toString()} deleteItem={this.updateShoppingList}/>
//                 )}
//             </div>
//         )
//     }
// }


// export default ShoppingList;