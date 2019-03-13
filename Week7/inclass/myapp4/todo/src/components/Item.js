import React, { Component } from 'react';

class Item extends Component {
    render() {
        return(
            <h1>{this.props.name}</h1>
        )
    }
}

export default Item;
