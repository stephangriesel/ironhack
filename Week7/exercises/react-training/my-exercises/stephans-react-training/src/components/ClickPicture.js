import React, { Component } from 'react'
import '../img/face.png'

class ClickPicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    toggleVisibility() {
        this.setState({
            visibility: !this.state.visibility
        });
    }
    render() {
        if (this.state.visibility) {
            return (
                <div class="with">
                    <img src={require("../img/with.png")} onClick={this.toggleVisibility} alt="face" />
                </div>
            );
        } else {
            return (
                <div class="without">
                    <img src={require("../img/without.png")} onClick={this.toggleVisibility} alt="face"/>
                </div>
            )
        }

    }

}


export default ClickPicture;