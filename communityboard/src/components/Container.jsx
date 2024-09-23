import React from "react";
import Event from "./Event";
import "../App.css";

const Container = () => {
    return (
        <div className='Container'>
            <Event
                image='https://via.placeholder.com/150'
                title='Title 1'
                link='https://www.example.com'
            />
            <Event
                image='https://via.placeholder.com/150'
                title='Title 1'
                link='https://www.example.com'
            />
            <Event
                image='https://via.placeholder.com/150'
                title='Title 1'
                link='https://www.example.com'
            />
            <Event
                image='https://via.placeholder.com/150'
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
