import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home'
import CountryDetail from './components/CountryDetail';
import NavBar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          {/* <NavBar /> */}
        </div>
        <div>
          <Switch>
            {/* {<Route exact path="/" component={Home}></Route>} */}
            {<Route path="/countrydetail" component={CountryDetail}></Route>}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
