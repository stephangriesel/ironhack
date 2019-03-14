import React, { Component } from 'react';


class Counter extends Component {

    // Counter 
    state = {
        count: 0
    }

    incrementClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementClick = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div className="counter">
            <h1>Counter</h1>
            <p>{this.state.count}</p>
            <button onClick={this.incrementClick}>+</button><button onClick={this.decrementClick}>-</button>

            </div>

        )
    }
}

export default Counter