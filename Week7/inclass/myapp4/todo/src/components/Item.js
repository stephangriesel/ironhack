import React, { Component } from 'react';

class Item extends Component {
    render() {
        return(
            <h1 onClick={() => this.props.deleteItem(this.props.index)}>{this.props.name}</h1>
        )
    }
}

export default Item;
