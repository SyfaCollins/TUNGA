import React from 'react'

function Card(props) {

    return ( 
        <div className="card--container">
            <div className="card--img">
            <img src={props.imgUrl} alt="hall" className='img'/>

            </div>

            <div className="info">
                <span>{props.location} 
                <a href="">{props.googleMapsUrl}</a></span>
                <h2>{props.title}</h2>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.desc}
                </p>
            </div>

        </div>
     );
}

export default Card;