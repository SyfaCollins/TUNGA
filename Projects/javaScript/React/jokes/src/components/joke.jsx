import React from 'react'

export default function Joke(props){


 

    return(
        <div className="joke container">
        
            <h4>Setup:{props.setup}</h4>
            <hp>Punchline:{props.punchline}</hp>

        </div>
    )
}