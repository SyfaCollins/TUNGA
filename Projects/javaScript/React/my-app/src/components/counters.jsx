import React, { Component } from 'react';

import Counter from "./counter";

class Counters extends Component {


   

    render() { 

        const {counters, onDelete, onIncrement } = this.props

        return (
        <div>
            {counters.map(counter => 
                <Counter
                    key={counter.id}
                    counter = {counter}
                    onDelete={onDelete}
                    onIncrement={onIncrement}>

                    <h4>Item {counter.id}</h4>
                    <span>{counter.item}</span>

                </Counter>
            )}
        </div>
        );
    }
}
 
export default Counters;