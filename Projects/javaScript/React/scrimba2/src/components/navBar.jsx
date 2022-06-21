import React, { Component } from 'react'
import reactLogo from '../images/logo512.png'

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <nav>
                <img src={reactLogo} alt="" />
                <h3>React</h3>
                <h4>React Course Project 1</h4>
            </nav>
        );
    }
}
 
export default NavBar;