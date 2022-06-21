import React from 'react'

function Navbar() {
    return ( 
        <nav className='nav--bar'> 
            <img src="./images/logo512.png" alt="logo" className='nav--logo' />
            <h3>My World Journal <span className='badge badge-primary project--number'>react project-2</span></h3>
        </nav>
     );
}

export default Navbar;