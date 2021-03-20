import React from 'react';
import './Destinations.scss';
import { Link } from 'react-router-dom';

const Destinations = () => {
    return (
        <div className='Destinations'>
            <Link to='/trips/hawaii' className='Hawaii'>Hawaii</Link>
            <Link to='/trips/jamaica' className='Jamaica'>Jamaica</Link>
        </div>
    )
}

export default Destinations;