import React, { Component } from 'react';


class Greetings extends Component {
    render() {
        var greeting;
        switch(this.props.lang) {
            case("de"):
                greeting = "Hallo"
                break;
            case("fr"):
                greeting = "Bonjour"
                break;
            case("en"):
                greeting = "Hello"
                break;
            case("es"):
                greeting = "Hola"
                break;
            default:
                greeting = "Hello"
        }

        var greetingsLan = {de: "Hallo", fr: "Bonjour", es: "Hola", en: "Hello"}

        return (
            <div className="greetings">
                <h1>{greetingsLan[this.props.lang] || "Hello"}, {this.props.children}</h1>
            </div>
        )
    }
}

export default Greetings