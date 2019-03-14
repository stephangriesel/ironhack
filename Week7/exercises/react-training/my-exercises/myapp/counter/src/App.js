import React, { Component } from 'react';
import Counter from './components/Counter';
import './App.css';
import './Student.css';
import Search from './components/Search';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <Counter />
        </div>
        <div>
          <Search />
        </div>
        {/* {StudentData.map((student) => {
          return <Student
            firstName={student.firstName}
            lastName={student.lastName}
            img={student.img}
            country={student.country}
          />
        })} */}
      </div>

    );
  }
}

export default App;
