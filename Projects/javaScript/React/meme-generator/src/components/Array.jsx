import React from 'react';

function Array() {

    const [arrayItem,addArrItem] = React.useState(["Item 1","item 2"])

    function handleItem(){

        // let newItem = [...addArrItem]

        addArrItem(prevState =>{
            return [...prevState, `Item ${prevState.length + 1}`]
        })
        // console.log('clicked')

    }

    return ( 
        <div className="container">
              <h3>This is an Array</h3>
            <button className='btn btn-primary' onClick={handleItem}>Add Item</button>
           {arrayItem.map( item => <p>{item}</p>)}

           {/* {arrayItem} */}
        </div>
     );
}

export default Array;