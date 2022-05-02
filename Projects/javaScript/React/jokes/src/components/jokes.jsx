import React, { Component } from 'react';
import Joke from './joke';

class Jokes extends Component {
    state = {  } 
    render() { 
        return (
            <section className='jokes'>
                <Joke 
                
                    setup="I got my daughter a fridge for her birthday"

                    punchline="I cant wait to see her face light up as she opens it"

                    
                
                />
                <Joke 
                
                    setup="How did the hackers escape the police?"

                    punchline="He just ransomware"
                
                />
                <Joke 
                
                    setup="Why didn't the pirates travel on mountain roads?"

                    punchline="Scurvy"
                
                />
                <Joke 
                
                    setup="Why do bees stay in the hive in the winter?"

                    punchline="Swarm"
                
                />
                <Joke 
                
                    setup="What's the best thing about Switzerland?"

                    punchline="I don't know, but the flag is a big plus!"
                
                />

            </section>
        );
    }
}
 
export default Jokes;