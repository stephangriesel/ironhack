import React, { Component } from 'react';

class RandomNumber extends Component {

    constructor(props) {
        super(props);
        this.handleClickMinMax = this.handleClickMinMax.bind(this);
        this.state = { random: 0 };
    }

    handleClickMinMax() { 
        const min = 1;
        const max = 6;
        const rdm = Math.floor((Math.random() * max - min) + 1);
        this.setState({ random: this.state.random + rdm });
    }

    handleClickMinMaxTwo() { 
        const min = 1
        const max = 100;
        const rdm = Math.floor((Math.random() * max - min) + 1);
        this.setState({ random: this.state.random + rdm });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickMinMax.bind(this)}>Generate between 1 and 8</button>
                <div>
                    <p>Random generated number: {this.state.random}</p>
                </div>
                <div>
                    <button onClick={this.handleClickMinMaxTwo.bind(this)}>Generate between 1 and 100</button>
                    <div>
                        <p>Random generated number: {this.state.random}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomNumber;