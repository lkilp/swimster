import React from 'react';
import './Header.scss';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className='Header'>
            <Navigation />
            <div className='Intro'>
                 <h1>Swimster</h1>
            </div>
           
        </div>
    )
}

export default Header;