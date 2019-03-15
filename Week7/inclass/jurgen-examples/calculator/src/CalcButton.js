import React, { Component } from 'react';

const buttonStyle = {
    width: "100px",
    height: "100px",
    "backgroundColor": "#272C34",
    color: "white",
    display: "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "fontSize": "30px",
    float: "left"
  }

class CalcButton extends Component {

    render() {
        return (
           <div onClick={() => {debugger;this.props.clickHandler(this.props.buttonValue)}} style={buttonStyle}>
               {this.props.buttonValue}
           </div>     
        )
    }
}

export default CalcButton