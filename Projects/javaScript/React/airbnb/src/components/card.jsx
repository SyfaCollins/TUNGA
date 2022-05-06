import React, { Component } from 'react'


function Card({img,title,price,rating,reviews}) {
   
        return (
            <div className='card-container '>
                <div className="img--container">
                <img src={img} alt="sculpture" className='card--img'/>
                </div>
                <div className="card-disc">
                <span><img src='./images/star.png' className="card--rate" /> {rating} reviews:({reviews})</span>
                {/* <span>reviews:</span> */}
                <h4>{title}</h4>
                <p>Amount:<span>${price}</span></p>
                </div>
            
            </div>
        );
    }

 
export default Card;