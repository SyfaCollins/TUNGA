import React, { Component } from 'react';
import Footer from './footer'
import NavBar from './navbar'
import Main from './main';


class App extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <NavBar />
            <Main />
            <Footer />
        
        </>
        );
    }
}
 
export default App;