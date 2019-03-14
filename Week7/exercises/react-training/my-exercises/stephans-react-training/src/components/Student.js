import React, { Component } from 'react';

class Student extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="card">
                    <h1>{this.props.firstName} {this.props.lastName}</h1>
                    <img src={this.props.img} alt="student" />
                    <h4>{this.props.country}</h4>
                </div>
            </div>
        )


    }
}

export default Student

