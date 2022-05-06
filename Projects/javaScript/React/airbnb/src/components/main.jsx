import React from 'react';
import Card from './card'
import cardData from './data.js'


export default function Main(){
    
    
    let date = new Date();
    let timeOfDay = date.getHours()
    let message;
    
    if( timeOfDay > 0 && timeOfDay < 12){
        message = "Morning"

        // return message;

    }else if(timeOfDay < 17){

        message = "afternoon"

        // return message;
        
    }else if(timeOfDay > 19){
        message = "Night time"
                // return message;
    }

    const cardElement = cardData.map(data =>{
        return <Card 
                    img={`./images/${data.coverImg}`}
                    title ={data.title}
                    price={data.price}
                    rating={data.stats.rating}
                    reviews={data.stats.reviewCount}
        />
    })

    return(

        <main>
            <h1 className='badge badge-primary'>Daily offers at : {message}</h1>
           
           <div className="cards">
                {/* <Card 
                    img="./images/sculpture.jpg"
                    name="Sculpture"
                    price="$300"
                    stars="100"

                />
                <Card 
                    img="./images/fashion.jpg"
                    name="Art Piece"
                    price="$150"
                    stars="550"

                />
                <Card 
                    img="./images/artistic-frames-JTwfZDrx7Vo-unsplash.jpg"
                    name="Wood"
                    price="$50"
                    stars="10"


                /> */}

                {cardElement}
           </div>
           

        </main>
    )
}