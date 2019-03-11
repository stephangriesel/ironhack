import React, { Component } from 'react';
import Character from './components/Character';
import Header from './components/Header';
import StudentData from './data/students';
import './Student.css';

class App extends Component {

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

        {/* <Header />
        <Character /> */}
      </div>
    );
  }
}

export default App;