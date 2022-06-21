import React from 'react';
// import HeaderTest from './HeaderTest'
// import Body from './BodyTest'
import boxes from './boxes'
import Box from './Box';
import "./test.css"




export default function AppTest(props){

    // const [user, setUser] = React.useState('Syfa')
    // return (
    //     <div className='container'>
    //         <h1>App Test</h1>
    //         <HeaderTest username={user} />
    //         <Body username={user} />
            
    //     </div>
    // )

    const [squares,setSquare] = React.useState(boxes)

    // let styles = {
    //     backgroundColor : squares.map(
    //         square => (square.on ? 'red' : 'black')
    //     )
    // }

   function toggle(on){

        setSquare(on => !on)
  
    //   console.log(on)

    }


const squareEle = squares.map(
    square => (
        <>
            <Box 
            on = {square.on} 
            key={square.id} 
            id={square.id} 
            handleClick ={toggle}
            />
        </>
      
    )
)

console.log(squareEle)

    return(
        <main className='container'>
            {squareEle}
        </main>
    )

}