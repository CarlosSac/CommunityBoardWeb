import React from "react";
import Event from "./Event";
import image1 from "../assets/cable_car.jpg";
import image2 from "../assets/bridge.jpeg";
import image3 from "../assets/clerigos-tower.jpg";
import image4 from "../assets/bistro.jpeg";
import image5 from "../assets/vitoria.jpg";
import image6 from "../assets/bolhao-market-porto.jpg";
import image7 from "../assets/funicular.jpeg";
import image8 from "../assets/manteigaria.jpg";
import image9 from "../assets/jardim-do-morro.jpeg";
import image10 from "../assets/chapel.jpg";
import "../App.css";

const Container = () => {
    return (
        <div className='Container'>
            <Event
                image={image1}
                title='Gaia Cable Car'
                link='https://gaiacablecar.com/en/cable-car/'
            />
            <Event
                image={image2}
                title='Dom Luís I Bridge'
                link='https://porto.travel/dom-luis-bridge/'
            />
            <Event
                image={image3}
                title='Clerigos Tower'
                link='https://www.introducingporto.com/clerigos-church-and-tower'
            />
            <Event
                image={image4}
                title='Brasaõ Bistro'
                link='https://www.brasao.pt/en/'
            />
            <Event
                image={image5}
                title='Mirador da Vitoria'
                link='https://www.example.com'
            />
            <Event
                image={image6}
                title='Bolhao Market'
                link='https://www.example.com'
            />
            <Event
                image={image7}
                title='Funicular dos Guindais'
                link='https://www.example.com'
            />
            <Event
                image={image8}
                title='Manteigaria Bakery'
                link='https://www.example.com'
            />
            <Event
                image={image9}
                title='Jaardim do Morro'
                link='https://www.example.com'
            />
            <Event
                image={image10}
                title='Chapel of Souls'
                link='https://www.example.com'
            />
        </div>
    );
};

export default Container;
