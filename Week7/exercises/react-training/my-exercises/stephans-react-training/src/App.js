import React, { Component } from 'react';
import './App.css';
import './css/Student.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Counter from './components/Counter';
import Search from './components/Search';
import ClickPicture from './components/ClickPicture';
import Home from './components/Home';
import BoxColor from './components/BoxColor'
import RandomNumber from './components/RandomNumber';


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
            <Route path="/boxcolor" component={BoxColor}></Route>
            <Route path="/randomnumber" component={RandomNumber}></Route>
          </Switch>
        </div>


      </div>

    );
  }
}

export default App;
