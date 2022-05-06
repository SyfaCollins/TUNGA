import React, { Component } from 'react';
import Joke from './joke';
import jokesData from './jokesData'


class Jokes extends Component {
    state = {  } 
    render() { 

        const jokeElement = jokesData.map(joke=>{
             return <Joke setup={joke.setup} punchline={joke.punchline}/>
        })

        console.log(jokesData)
    
        
        return (
            <section className='jokes'>
            
                {jokeElement}

            </section>
        );
    }
}
 
export default Jokes;