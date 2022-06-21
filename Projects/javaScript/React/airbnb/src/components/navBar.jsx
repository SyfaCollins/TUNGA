import React, { Component } from 'react';
// import airbnb from "../images/airbnb.png"

class NavBar extends Component { 
    render() { 
        return (
            <nav>
                <img src='./images/airbnb.png' alt="img" className='img--logo '/>
                <span className='img--title'>airbnb</span>
            </nav>
          
        );
    }
}
 
export default NavBar;