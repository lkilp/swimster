

import React, { useState, useEffect } from 'react';

import './BackgroundSlider.scss';

const BackgroundSlider = (props) => {
    const { images } = props;

    const [prevIndex,setPrevIndex] = useState(0);
    const [nextIndex,setNextIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setPrevIndex(nextIndex);
            setNextIndex((nextIndex+1) % images.length);

        }, 5000);
        return () => {
            clearInterval(id);
        }
    })


    const previousStyle = {
        backgroundImage: `url(${images[prevIndex].src})`,
    }
    const nextStyle = {
        backgroundImage: `url(${images[nextIndex].src})`,
    }
    return (
        <div className="BackgroundSlider">
            <div className="previous" style={previousStyle}></div>
            <div key={nextIndex} className="next" style={nextStyle}></div>
        </div>
    )
}

export default BackgroundSlider;