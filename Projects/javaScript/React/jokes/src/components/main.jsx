import React, { Component } from 'react'
import Jokes from './jokes';

class Main extends Component {
    
    render() { 

        return (
            <div className="main container">
                <h2>React Jokes</h2>

                <Jokes />
                
            </div>
           
        );
    }
}
 
export default Main;