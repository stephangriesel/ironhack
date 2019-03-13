import React, { Component } from 'react';
import Item from './Item';

class ShoppingList extends Component {

    constructor() {
        super()
        // this.updateShoppingList = this.updateShoppingList.bind(this)
    }

    state = {
        items: ["Milk", "Soya", "Legumes"]
    }


    render() {
        return (
            <div>
                {this.state.items.map((anItem, index) =>
                    <Item name={anItem} />

                )}
            </div>
        )
    }
}


export default ShoppingList;