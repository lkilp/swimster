import React from 'react';
import './Activity.scss';

const Activity = (props) => {
    const imageStyle = {
        backgroundImage: `url(${props.image})`,
    }
    return (
        <div className='Activity'>
            <div className='image' style={imageStyle}></div>
            <h3>{props.title}</h3>
        </div>
    )
}

export default Activity;