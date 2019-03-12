import React, { Component } from 'react';
import Character from './components/Character';
import Header from './components/Header';
import StudentData from './data/students';
import Greetings from './components/Greetings';
import Random from './components/Random';
import './Student.css';


class App extends Component {

  // constructor(props){
  //   super(props)
  //   this.state = {counter:0}
  // }

  render() {
    return (
      <div className="App">
        {StudentData.map((student) => {
          return <Character 
            firstName={student.firstName} 
            lastName={student.lastName}
            img={student.img}
            country={student.country}
            />
         })}
      </div>
      
    );
  }
}

export default App;

