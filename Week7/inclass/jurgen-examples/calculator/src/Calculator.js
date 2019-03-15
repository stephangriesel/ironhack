import React, { Component } from 'react';
import CalcButton from "./CalcButton"
import Display from "./Display"

let numPad = {
    width: "300px",
    "boxSizing": "border-box"
}

class Calculator extends Component {

    constructor(props) {
        super(props)
        this.changeInput = this.changeInput.bind(this)
    }

    state = {
        output: "Quick Math", // default display text
        pressed: [], //current button pressed, default empty
        buttons: [1,2,3,4,5,6,7,8,9,0,"*", "="] // the buttons to render. These never change so it doesn't necessarily needs to be in state
    }
    // this is the handler that is passed to every CalcButton component. It is what makes lifting state up possible
    changeInput(char) {
        if(char === "=") {
            var x = this.state.pressed
            var right = x.splice(0, x.indexOf("*"))
            x.shift()
            var result = parseInt(x) * parseInt(right)
            this.setState({output: result, pressed: []}) // reset pressed for another sum. 
            // Calculator is rerended with a different state, causing it to pass different
            // data to the display value. In a result, the display value changes
        } else {
            let newPressed = [...this.state.pressed, char]
            this.setState({output: newPressed.join(""), pressed: newPressed})
            // updates state as well. Not with the result, but with the input
        }
    }

    render() {
        return (
        <div>
           <Display outputVal={this.state.output}/> 
           <div style={numPad}>
                {
                    this.state.buttons.map((button)=> 
                        // clickHandler={this.changeInput} is what's making lifting state up possible. The communication line
                        // between <Calculator /> and <CalcButton/> is made here
                        <CalcButton clickHandler={this.changeInput} buttonValue={button} />
                    )
                }
           </div> 
        </div>        
        )
    }
}

export default Calculator