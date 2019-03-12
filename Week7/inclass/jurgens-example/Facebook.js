import React, { Component } from 'react';
import './facebook.css'
class Facebook extends Component {
    render() {
        return(
            <div className="facebook">
               <img src={this.props.picture} />
               <div className="text-wrap">
                   <p><span className="bold">Firstname:</span>{this.props.firstName}</p>
                   <p><span className="bold">Lastname:</span>{this.props.lastName}</p>
                   <p><span className="bold">Country:</span>{this.props.country}</p>
                   <p><span className="bold">Type:</span>{this.props.isStudent? "Student": "Teacher"}</p>
               </div>     
            </div>            
        )
    }
}

export default Facebook