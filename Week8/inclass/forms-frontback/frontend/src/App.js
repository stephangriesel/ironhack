import React, { Component } from 'react';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Signup />
        <Login />
      </div>
    );
  }
}

export default App;

