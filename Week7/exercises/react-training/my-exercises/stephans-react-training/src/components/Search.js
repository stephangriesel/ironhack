import React, { Component } from 'react';
import StudentData from '../data/students';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: StudentData,
            searchStudents: StudentData
        }
        this.search = this.search.bind(this); // The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
    }

    search(event) {
        var searchVal = event.currentTarget.value
        var showMeTheStudents = this.state.students.filter(student => {
            return student.firstName.indexOf(searchVal) !== -1;
        })
        this.setState({searchStudents: showMeTheStudents}) // searchStudents = contains studentdata, showMeTheStudents us the filtered students
    }

    render() {
        return (
            <div>
                <div className="searchBox">
                    <input onChange={this.search} placeholder="enter name" type="text" />
                </div>
                {this.state.searchStudents.map((student) =>
                    <div className="wrapper">
                        <div className="card">
                            <h1>{student.firstName} {student.lastName}</h1>
                            <img src={student.img} alt="student" />
                            <h4>{student.country}</h4>
                        </div>
                    </div>

                )}

            </div>
        )
    }

}

export default Search