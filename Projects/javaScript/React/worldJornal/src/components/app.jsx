import React, { Component } from 'react';
import Navbar from './navBar';
import Main from './main';
import Footer from './footer';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container'>
                <Navbar />
                <Main />
                <Footer />

            </div>
            
        );
    }
}
 
export default App;