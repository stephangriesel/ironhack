import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (event) => {
        var updateChange = {};
        updateChange[event.target.name] = event.target.value;
        this.setState(updateChange);
    }

    handleLogin = (event) => {
        const newUser = this.state;
        event.preventDefault();

        axios({
            method: 'post',
            url: 'http://localhost:3001/api/login',
            data: newUser,
            withCredentials: true,
        })
            .then(function (response) {
                console.log(response);
                // debugger
            })
            .catch(function (error) {
                console.log(error);
                // debugger
            });

    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handeLogin}>
                    <input onChange={event => this.handleChange(event)} name="email" placeholder="please use email to login" type="text" value={this.state.email}></input>
                    <input onChange={event => this.handleChange(event)} name="password" placeholder="enter your password" type="password" value={this.state.password}></input>
                    <input type="submit"></input>
                    
                </form>
            </div>
        )
    }
}

export default Login;