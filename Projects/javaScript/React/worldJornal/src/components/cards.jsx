import React, { Component } from 'react'
import Card from './card';
import myData from './data.js'



class  Cards extends Component {
    state = {  } 
    render() { 

        const cardElement = myData.map( data =>{
            return <Card  
            title   ={data.title}
            location ={data.location}
            imgUrl  ={data.imageUrl}
            desc    ={data.description}
            startDate ={data.startDate}
            endDate ={data.endDate}
            googleMapsUrl ={data.googleMapsUrl}

            />
        })
    

        return (
            <div className="cards--container">
                {cardElement}
            </div>
        );
    }
}
 
export default Cards ;