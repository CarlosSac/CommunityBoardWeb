import React from "react";
import Event from "./Event";
import image1 from '../assets/cable_car.jpg'; 
import image2 from '../assets/bridge.jpeg';
import image3 from '../assets/clerigos-tower.jpg';
import image4 from '../assets/bistro.jpeg';
import "../App.css";

const Container = () => {
    return (
        <div className='Container'>
            <Event
                image={image1}                
                title='Title 1'
                link='https://www.example.com'
            />
            <Event
                image={image2}
                title='Title 1'
                link='https://www.example.com'
            />
            <Event
                image={image3}
                title='Title 1'
                link='https://www.example.com'
            />
            <Event
                image={image4}
                title='Title 1'
                link='https://www.example.com'
            />
            <Event
                image='https://via.placeholder.com/150'
                title='Title 1'
                link='https://www.example.com'
            />
        </div>
    );
};

export default Container;
