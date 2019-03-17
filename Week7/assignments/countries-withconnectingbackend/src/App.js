import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Countries />
      </div>
    );
  }
}

{/* <div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/search" component={Search}></Route>
          </Switch>
        </div> */}

export default App;
