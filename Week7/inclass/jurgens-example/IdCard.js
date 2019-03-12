import React, { Component } from 'react';
import './IdCard.css'

class IdCard extends Component {

    render() {
        return (
            <div className="IdCard">
               <img src={this.props.picture} />
               <div className="text-wrap">
                   <p><span className="bold">Lastname:</span>{this.props.lastName}</p>
                   <p><span className="bold">Firstname:</span>{this.props.firstName}</p>
                   <p><span className="bold">Gender:</span>{this.props.gender}</p>
                   <p><span className="bold">Height:</span>{this.props.height}</p>
                   <p><span className="bold">Birthday:</span>{this.props.birth.toString()}</p>
               </div>     
            </div>
        )
    }
}

export default IdCard

// lastName='Doe'
// firstName='John'
// gender='male'
// height={178}
// birth={new Date("1992-07-14")}
// picture="https://randomuser.me/api/portraits/men/44.jpg"