import React from "react";
import "../App.css";

const Event = (props) => {
    return (
        <div className='card'>
            <img src={props.image} alt={props.title} />
            <h5>{props.title}</h5>
            <a className='button' href={props.link}>
                Learn More
            </a>
        </div>
    );
};

export default Event;
