import React, { Component } from 'react';
import './App.css';
import './css/Student.css';
import StudentData from './data/students.json';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Counter from './components/Counter';
import Student from './components/Student';
import Search from './components/Search';
import ClickPicture from './components/ClickPicture';
import Home from './components/Home';


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
            <Route path="/counter" component={Counter}></Route>
            <Route path="/student" component={Search}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/clickpicture" component={ClickPicture}></Route>
          </Switch>
        </div>


      </div>

    );
  }
}

export default App;
