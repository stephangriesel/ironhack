import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {

    state = {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      }

    handleChange = (event) => {
        var updateChange = {};
        updateChange[event.target.name] = event.target.value;
        this.setState(updateChange);
    }
    
    handleSubmit = (event) => {
      const newUser = this.state;
        event.preventDefault();
        debugger
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/users',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              data: newUser,
              withCredentials: true
          }
    
          })
          .then(function (response) {
            console.log(response);
            debugger
          })
          .catch(function (error) {
            console.log(error);
            // debugger
          });

    }

    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
                <input onChange={event => this.handleChange(event)} name="firstname" placeholder="name" type="text" value={this.state.firstname}></input>
                <input onChange={event => this.handleChange(event)} name="lastname" placeholder="lastname" type="text" value={this.state.lastname}></input>
                <input onChange={event => this.handleChange(event)} name="email" placeholder="email" type="text" value={this.state.email}></input>
                <input onChange={event => this.handleChange(event)} name="password" placeholder="password" type="password" value={this.state.password}></input>
                <input type="submit"></input>
            </form>
        )
    }
}

export default Form;