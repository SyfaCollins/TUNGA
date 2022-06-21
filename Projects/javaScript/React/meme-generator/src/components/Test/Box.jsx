import React from 'react'


export default function Box(props){

    const [on, isOn] = React.useState(props.on) 

    

    return(

        <div style={{backgroundColor : props.on ? '' : '#222222'}} className='box' 
        onClick={()=>props.handleClick(props.on)}
        />

    )
}




// const [state_value, changeValue] = React.useState(props.state_value)

// function toggle(){
//     // console.log(state_value)

//     changeValue(prevState => !prevState)
// }

// return(

//     <div style={{backgroundColor : state_value ? 'red' : '#222222'}} className='box'  onClick={toggle} key={props.id} />

// )