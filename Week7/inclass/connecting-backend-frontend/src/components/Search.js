import React, { Component } from 'react';
import axios from 'axios';
// var express = require('express');
// var cors = require('cors');
// var app = express();

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: []
        }
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

// app.use(cors());

export default Search