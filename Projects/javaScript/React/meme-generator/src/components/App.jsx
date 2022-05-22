import React, { Component } from 'react'
import Header from './Header';
import Meme from './Meme';
import Test from './test';
// import Counter from './counter';
import Array from './Array';
import Obj from './Objects';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header />
            <Meme />
            <Test />
            <Array/>
            <Obj />
            </>
        );
    }
}
 
export default App;