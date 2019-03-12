import React, { Component } from 'react';

class Random extends Component {

    randomInterval(min, max) {
        return Math.floor((Math.random() * (max - min))) + min
    }
    
    render() {
        let randomNumber = this.randomInterval(this.props.min, this.props.max)
        return (
            <h1>Random value between {this.props.min} and {this.props.max} => {randomNumber}</h1>
        )
    }
}


export default Random