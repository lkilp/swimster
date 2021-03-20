import React from 'react';
import './Activity.scss';
import { Link } from 'react-router-dom';

const Activity = (props) => {
    const imageStyle = {
        backgroundImage: `url(${props.image})`,
    }
    return (
        <Link to={props.link} className='Activity'>
            <div className='image' style={imageStyle}></div>
            <h4>{props.title}</h4>
        </Link>
    )
}

export default Activity;