import React, { Component } from 'react';
import NavBar from './navBar';
import Hero from './hero';
import Main from './main';


class App extends Component {
    state = {  } 
    render() { 
        return (
            <div className='App container'>
                <NavBar/>
                <Hero />
                <Main />
                
            </div>
        );
    }
}
 
export default App;