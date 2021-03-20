import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';

const Navigation = (props) => {
    return (
        <nav className='Navigation' >
            <Link to='/'><img src={logo} alt='logo' /></Link>
            <Link to='/water-aerobics'>Water Aerobics</Link>
            <Link to='/kids'>Kids</Link>
            <Link to='/snorkelling'>Snorkelling</Link>
            <Link to='/trips'>Trips</Link>
        </nav>
    )
}

export default Navigation;