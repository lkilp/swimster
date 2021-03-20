import React from 'react';

import './Trips.scss';
import Navigation from '../components/Navigation';
import Destinations from '../components/Destinations';

const Trips = () => {
    return (
        <div className='Trips'>
            <Navigation />
            <section>
                <h2>Dream Trips!</h2>
                <div className='destinationsBox'>
                    <Destinations />
                </div>
            </section>
        </div>
    )
}

export default Trips;