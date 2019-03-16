import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: []
        }
    this.search = this.search.bind(this);
    }

    search(event) {
        var searchVal = event.currentTarget.value
        var showMeTheStudents = this.state.students.filter(student => {
            return student.firstName.indexOf(searchVal) !== -1;
        })
        this.setState({ students: showMeTheStudents }) // searchStudents = contains studentdata, showMeTheStudents us the filtered students
    }

    render() {
        axios.get('http://localhost:3001')
            .then(response => {
                this.setState({ students: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
        return (
            <div>
                <div className="searchBox">
                    <input onChange={this.search} placeholder="enter name" type="text" />
                </div>
                {this.state.students.map((student) =>
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