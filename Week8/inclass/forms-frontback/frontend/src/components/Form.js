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

    axios({
      method: 'post',
      url: 'http://localhost:3001/api/users',
      data: newUser,
      withCredentials: true,
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',


      // }


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

      <div><h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={event => this.handleChange(event)} name="firstname" placeholder="name" type="text" value={this.state.firstname}></input>
          <input onChange={event => this.handleChange(event)} name="lastname" placeholder="lastname" type="text" value={this.state.lastname}></input>
          <input onChange={event => this.handleChange(event)} name="email" placeholder="email" type="text" value={this.state.email}></input>
          <input onChange={event => this.handleChange(event)} name="password" placeholder="password" type="password" value={this.state.password}></input>
          <input type="submit"></input>
        </form>
        <h2>Login</h2>
        <form onSubmit={this.handeLogin}>
          <input onChange={event => this.handleChange(event)} name="emaillogin" placeholder="please use email to login" type="text" value={this.state.emaillogin}></input>
          <input onChange={event => this.handleChange(event)} name="passwordlogin" placeholder="enter your password" type="password" value={this.state.passwordlogin}></input>
        </form>
      </div>
    )
  }
}

export default Form;