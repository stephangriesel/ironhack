import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render(){
        return(
            <nav className="nav-style">
                    <ul>
                      <li><NavLink to='/'>Home</NavLink></li>
                      <li><NavLink to='/counter'>Counter</NavLink></li>
                      <li><NavLink to='/student'>IdCard</NavLink></li>
                      <li><NavLink to='/clickpicture'>ClickablePicture</NavLink></li>
                    </ul>
                  </nav>
        )
    }
}


// const Home = () => <h1>Home</h1>;
// const Counter = () => <h1>Counter</h1>;
// const Student = () => <h1>Student</h1>;
// const StudentSearch = () => <h1>StudentSearch</h1>;
// const ClickPicture = () => <h1>ClickPicture</h1>;


export default NavBar;