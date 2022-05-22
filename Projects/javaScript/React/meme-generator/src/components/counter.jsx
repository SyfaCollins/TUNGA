import React from 'react';

function Counter() {

    const [count , setCount] = React.useState(0)

function increment(){

    setCount(nextCount => nextCount + 1)
}

function decrement(){

    setCount(prevCount => prevCount - 1)


    

}
   

    return (
        <div className='container'>
        <h1>Counter App</h1>
        <h4>{count}</h4>
        <button className='btn btn-primary' onClick={increment}>+{}</button>
        <button className='btn btn-alert' onClick={decrement}>-</button>

        </div>
    );
}

export default Counter;