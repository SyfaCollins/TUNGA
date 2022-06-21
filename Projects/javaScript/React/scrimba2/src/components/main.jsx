import React, { Component } from 'react';

class Main extends Component {
    state = {  } 
    render() { 
        return (
            <main>
                <h1 className='main--title'>Fun facts about React</h1>
                <ul className='main--facts'>
                    <li>Was first release in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on Github</li>
                    <li>Power thousands of enterprises apps, including mobile apps</li>
                </ul>
                
            </main>
        );
    }
}
 
export default Main;