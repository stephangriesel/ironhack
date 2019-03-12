import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from "./IdCard"
import students from './data.json'
import Greetings from './Greetings'
import Random from './Random'
import Facebook from './Facebook'
class App extends Component {

  constructor(props){
    super(props)
    var filteredStudents = students.filter(student=> student.country === "England")
    debugger
    this.state = {
        counter: 0, 
        allStudents: students, 
        studentFilter: "All", 
        filteredStudents: filteredStudents
    }
    this.incrementCounter = this.incrementCounter.bind(this)
  }
  incrementCounter() {
    this.setState({counter: this.state.counter + 1})
  }

  filterStudents = (country)=> {
    debugger
    let filteredStudents = this.state.allStudents.filter(student=> student.country === country)
    this.setState({filteredStudents: filteredStudents})
  }

  render() {
    debugger
    return (
      <div className="App">
            <h1>Counter: {this.state.counter}</h1>
            <button onClick={this.incrementCounter}>Increment</button>
            <IdCard 
              lastName='Doe'
              firstName='John'
              gender='male'
              height={178}
              birth={new Date("1992-07-14")}
              picture="https://randomuser.me/api/portraits/men/44.jpg"
            />
            <IdCard 
              lastName='Delores '
              firstName='Obrien'
              gender='female'
              height={172}
              birth={new Date("1988-05-11")}
              picture="https://randomuser.me/api/portraits/women/44.jpg"
            />

            <Greetings lang="de">
              Ludwig
            </Greetings>
            <Greetings lang="fr">
              François
            </Greetings>
            <div>
              <button onClick={()=> {this.filterStudents("France")}}>France</button>
              <button onClick={()=> {this.filterStudents("Germany")}}>Germany</button>
              <button onClick={()=> {this.filterStudents("England")}}>Uk</button>
            </div>
            <Random min={1} max={6}/>
            <Random min={1} max={100}/>
            {this.state.filteredStudents.map((current)=> {
                return <Facebook picture={current.img} isStudent={current.isStudent} country={current.country} firstName={current.firstName} lastName={current.lastName}/>
            })}
      </div>
    );
  }
}

export default App;
