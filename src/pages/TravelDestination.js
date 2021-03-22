
import React from "react";
import BackgroundSlider from "../components/BackgroundSlider";
import Navigation from "../components/Navigation";
import TravelInfo from "../components/TravelInfo";
import './TravelDestination.scss'


const Travel = (props) => {
    const { country, price, locations, images } = props;
    return (      
    <div className='TravelDestination'>
        <Navigation />
        <div className='travel-content'>
        <BackgroundSlider images={images} />
        <TravelInfo country={country} price={price} locations={locations} />
        </div>
    </div>
    );
}

export default Travel;