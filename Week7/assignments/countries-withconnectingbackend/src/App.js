import React, { Component } from 'react';
import './App.css';
import Countries from './components/Countries'

class App extends Component {
  render() {
    return (
      <div className="App">
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
