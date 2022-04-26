import React, { Component } from 'react';
import './App.css';
import Counters from './counters';
import Navbar from './navbar';


class App extends Component {
 
  state = {
    counters : [
        {id:1, value: 0, item: 'samsung S7'},
        {id:2, value: 0, item: 'Hp laptop'},
        {id:3, value: 0, item: 'Glasses'},
        {id:4, value: 0, item: 'Timberland'}
    ]
};
//Raised function

handleIncrement = (counter) =>{
const counters = [...this.state.counters];
const index = counters.indexOf(counter);
counters[index] = {...counter};
counters[index].value ++;
this.setState({counters});
}

handleDelete = (counterId) => {
const counters = this.state.counters.filter(c => c.id !== counterId);
this.setState({counters})
}

  render() { 
    return (
      <React.Fragment>
      <Navbar  totalCounters={this.state.counters.filter(c => c.value > 0).length}/>

      <main className='container'>
        <Counters 
        counters ={this.state.counters}
        onIncrement={this.handleIncrement}
        onDelete ={this.handleDelete}

        />
      </main>

    </React.Fragment>
    );
  }
}
 
export default App;