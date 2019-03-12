import React, { Component } from 'react';
import students from './web-dev-jan'
import Student from "./Student"
import Carousel from './Carousel'
class App2 extends Component {

    constructor(props){
        super(props)
        this.state = {
            students: students,
            searchStudents: students,
        }
        this.search = this.search.bind(this)
    }

    search(event) {
        let searchVal = event.currentTarget.value
        let searchedStudents = this.state.students.filter((student) => {
            return student.firstname.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1
        })
        this.setState({searchStudents: searchedStudents})
    }

    render() {
        return (
            <div>
            <Carousel
                imgs={["https://randomuser.me/api/portraits/women/1.jpg", 
                "https://randomuser.me/api/portraits/men/1.jpg",
                "https://randomuser.me/api/portraits/women/2.jpg", 
                "https://randomuser.me/api/portraits/men/2.jpg"]
            } />



                <input onChange={this.search} type="text" placeholder="search students" />
                {this.state.searchStudents.map((student)=> 
                    <Student firstname={student.firstname} />
                )}
            </div>
        )
    }

}

export default App2


        // let collector = []
        // for(let i = 0; i < this.state.students.length; i++) {
        //     if(this.state.students[i].firstname.indexOf(searchVal)) {
        //         collector.push(this.state.students[i])
        //     }
        // }