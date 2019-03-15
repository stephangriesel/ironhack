import React, { Component } from 'react';
import './App.css';
import './css/Student.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/search" component={Search}></Route>
          </Switch>
        </div>


      </div>

    );
  }
}

export default App;
