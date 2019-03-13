import React, { Component } from 'react'

class Item extends Component {
    render() {
        console.log(this.props)
      

        return (
            <h2 onClick={()=>{this.props.deleteItem(this.props.index)}}>
            {this.props.itemName}</h2>
        )
    }
}

export default Item