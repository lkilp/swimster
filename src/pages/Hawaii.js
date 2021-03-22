import React from 'react';

import surf from '../assets/pictures/hawaii/surf-pexels-alexandre-saraiva-carniato-2103783.jpg';
import climb from '../assets/pictures/hawaii/climb-pexels-rodnae-productions-7187979.jpg';
import cycle from '../assets/pictures/hawaii/cycle-pexels-andrea-piacquadio-2828962.jpg';
import plank from '../assets/pictures/hawaii/plank-pexels-nathan-cowley-1300526.jpg';
import surf3 from '../assets/pictures/hawaii/surf-3pexels-pixabay-416726.jpg';
import surf2 from '../assets/pictures/hawaii/surf2-pexels-ben-mack-5707686.jpg';
import surfers from '../assets/pictures/hawaii/surfers-pexels-ava-motive-1236685.jpg';
import windsurf from '../assets/pictures/hawaii/windsurf-pexels-apg-graphics-1604869.jpg';
import yoga from '../assets/pictures/hawaii/yoga-pexels-lucas-pezeta-2985098.jpg';
import TravelDestination from './TravelDestination';
import hawaiiBackgroundImage from '../assets/pictures/hawaii-pexels-troy-squillaci-2521619.jpg';

const Hawaii = () => {
    const images = [
        { src:surf, alt: 'surfing' },
        { src:climb, alt: 'climbing' },
        { src:cycle, alt: 'cycling' },
        { src:plank, alt: 'planking' },
        { src:surf3, alt: 'surfing' },
        { src:surf2, alt: 'surfing' },
        { src:surfers, alt: 'surfing' },
        { src:windsurf, alt: 'windsurfing' },
        { src:yoga, alt: 'yoga' },
    ];
    const locations = [
        { name:'Waipio Valley', days:'Day 1 to 2' },
        { name:'Hilo & Mauna Kea', days:'Day 3 to 4' },
        { name:'Volcanoes National Park', days:'Day 5 to 7' },
        { name:'Honolulu/Waikiki Beach', days:'Day 8 to 9' },
        { name:'North Shore & North Windward Coast', days:'Day 10 to 12' },
        { name:'South Windward Coast', days:'Day 13 to 14' },
    ]
    return (
        <TravelDestination
            country='Hawaii'
            price='$3,200'
            locations={locations}
            images={images}
            backgroundImage={hawaiiBackgroundImage}
            />
    )
}

export default Hawaii;