import React, { Component } from 'react';
import './App.css';
import './css/Student.css';
import StudentData from './data/students.json';
import Search from './components/Search'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Counter from './components/Counter';
import Student from './components/Student';
import ClickPicture from './components/ClickPicture';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
        </div>
        <div>
          <Switch>
            {/* <Route path="/" {Home}></Route> */}
            <Route path="/counter" component={Counter}></Route>
            <Route path="/student" component={Student}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/clickpicture" component={ClickPicture}></Route>
          </Switch>
        </div>
        <div>
          <Search />
        </div>
        <div>
          {StudentData.map((student) => {
            return <Student
              firstName={student.firstName}
              lastName={student.lastName}
              img={student.img}
              country={student.country}
            />
          })}
        </div>


      </div>

    );
  }
}

export default App;
