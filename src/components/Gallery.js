import React from 'react';
import './Gallery.scss';


const Gallery = (props) => {
    
    return (
        <div className='Gallery'>
            {props.images.map(obj => <img src={obj.src} alt={obj.alt} />)}
        </div>
    )
}

export default Gallery;