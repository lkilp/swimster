import React from 'react';

import TravelDestination from './TravelDestination';

import kayaking from '../assets/pictures/jamaica/kayaking-pexels-asad-photo-maldives-1320684.jpg';
import meditating from '../assets/pictures/jamaica/meditating-pexels-wendy-hero-67818.jpg';
import rafting from '../assets/pictures/jamaica/rafting-pexels-tom-fisk-1732278.jpg';
import snorkelling from '../assets/pictures/jamaica/snorkelling-pexels-john-cahil-rom-3041869.jpg';
import snorkelling2 from '../assets/pictures/jamaica/snorkelling-pexels-lucas-meneses-4712464.jpg';
import surfboards from '../assets/pictures/jamaica/surfboards-pexels-artem-beliaikin-2490931.jpg';
import surfing from '../assets/pictures/jamaica/surfing-pexels-jess-vide-4319877.jpg';

import jamaicaBackgroundImage from '../assets/pictures/jamaica_pexels-asad-photo-maldives-1450353.jpg'
const Jamaica = () => {
    const images = [
        { src:kayaking, alt:'kayaking' },
        { src:meditating, alt:'meditating' },
        { src:rafting, alt:'rafting' },
        { src:snorkelling, alt:'snorkelling' },
        { src:snorkelling2, alt:'snorkelling' },
        { src:surfboards, alt:'surfing' },
        { src:surfing, alt:'surfing' },
    ];
    const locations = [
        { name:'Montego Bay', days:'Day 1 to 2' },
        { name:'Negril', days:'Day 3 to 4' },
        { name:'South Coast', days:'Day 5 to 7' },
        { name:'Kingston', days:'Day 8 to 9' },
        { name:'Port Antonio', days:'Day 10 to 12' },
        { name:'Ocho Rios', days:'Day 13 to 14' },
    ]
    return (
        <TravelDestination
        country='Jamaica'
        price='$2,800'
        locations={locations}
        images={images}
        backgroundImage={jamaicaBackgroundImage}
        />
    )
}

export default Jamaica;