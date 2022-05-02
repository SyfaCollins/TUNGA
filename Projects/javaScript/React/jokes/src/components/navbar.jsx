import React, { Component } from 'react'
// import reactLogo from '../images/logo512.png'

class NavBar extends Component {


    
    render() { 

       let  styles ={
            fontWeight : 'bold'
        }

        return (
                <nav className='nav container'>
                    <h3 style={styles}><span>
                        <img src='./images/logo512.png'
                        alt="img" height="40px" />
                        </span>  LAugh OuT</h3>

                        <ul className='nav-item'> 
                            <li>Recent Jokes</li>
                            <li>Trending Jokes</li>
                            <li>Hot Jokes</li>
                
                        </ul>
                </nav>
        );
    }
}
 
export default NavBar;