import React, { Component } from 'react';

var displayStyle = {
    width: "300px",
    height: "100px",
    border: "2px solid black",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }

class Display extends Component {
    render() {
        debugger
        return (
           <div style={displayStyle}>
               {this.props.outputVal}
           </div>     
        )
    }
}

export default Display