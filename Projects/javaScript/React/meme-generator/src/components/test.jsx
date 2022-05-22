import React from 'react'

function Test() {

    const  [isImportant, setIsImportant] = React.useState(true)




    function handleState(){
       setIsImportant(prevState => !prevState)
    }
    return ( 
        <div className="state container">
            <h1>Is state important</h1>
            <div className="state--value">
                <h1 onClick={handleState}>{isImportant ? "Yes" : "No" }</h1>
            </div>
        </div>
     );
}

export default Test;