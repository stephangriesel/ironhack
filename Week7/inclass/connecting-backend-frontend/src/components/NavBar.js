import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render(){
        return(
            <nav className="nav-style">
                    <ul>
                      <li><NavLink to='/'>Home</NavLink></li>
                      <li><NavLink to='/search'>IdCard</NavLink></li>

                    </ul>
                  </nav>
        )
    }
}


export default NavBar;