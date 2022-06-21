import React, { Component } from 'react';
import NavBar from './navBar'
import Main from './main'

class App extends Component {
    state = {  } 
    render() { 
        return (
            <div className="container">
                <NavBar />
                <Main />
            </div>

        );
    }
}
 
export default App;