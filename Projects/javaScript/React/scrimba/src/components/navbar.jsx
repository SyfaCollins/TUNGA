import React, { Component } from 'react'
import reactLogo from '../images/logo512.png'

class NavBar extends Component {


    
    render() { 

        return (
                <nav className='nav container'>
                    <h3><span>
                        <img src={reactLogo}
                        alt="img" height="40px" />
                        </span> Website</h3>

                        <ul className='nav-item'> 
                            <li>Pricing</li>
                            <li>About</li>
                            <li>Contact</li>
                
                        </ul>
                </nav>
        );
    }
}
 
export default NavBar;