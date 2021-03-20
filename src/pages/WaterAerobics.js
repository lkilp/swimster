import React from 'react';
import Navigation from '../components/Navigation';
import './WaterAerobics.scss';

const WaterAerobics = () => {
    return (
        <div className='WaterAerobics'>
            <Navigation />
            <section> 
                <h2>Join our fantastic Water Aerobics classes!</h2>
                    <div className='schedule'>
                        <h3>Winter Schedule</h3>
                        <ul>Monday
                            <li>9.30AM</li>
                        </ul>
                        <ul>Tuesday
                            <li>10AM</li>
                            <li>5PM</li>
                        </ul>
                        <ul>Thursday
                            <li>9AM</li>
                        </ul>
                     
                        <ul>Saturday
                            <li>10AM</li>
                            <li>5PM</li>
                        </ul>
                    </div>
            </section>
        </div>
    )
}

export default WaterAerobics;