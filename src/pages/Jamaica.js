import React from 'react';
import Navigation from '../components/Navigation';
import './Jamaica.scss';

import kayaking from '../assets/pictures/jamaica/kayaking-pexels-asad-photo-maldives-1320684.jpg';
import meditating from '../assets/pictures/jamaica/meditating-pexels-wendy-hero-67818.jpg';
import paddleboarding from '../assets/pictures/jamaica/paddleboarding-pexels-jess-vide-4601393.jpg';
import rafting from '../assets/pictures/jamaica/rafting-pexels-tom-fisk-1732278.jpg';
import snorkelling from '../assets/pictures/jamaica/snorkelling-pexels-john-cahil-rom-3041869.jpg';
import snorkelling2 from '../assets/pictures/jamaica/snorkelling-pexels-lucas-meneses-4712464.jpg';
import surfboards from '../assets/pictures/jamaica/surfboards-pexels-artem-beliaikin-2490931.jpg';
import surfing from '../assets/pictures/jamaica/surfing-pexels-jess-vide-4319877.jpg';
import Gallery from '../components/Gallery';

const Jamaica = () => {
    const images = [
        { src:kayaking, alt: 'kayaking' },
        { src:meditating, alt: 'meditating' },
        { src:paddleboarding, alt: 'paddleboarding' },
        { src:rafting, alt: 'rafting' },
        { src:snorkelling, alt: 'snorkelling' },
        { src:snorkelling2, alt: 'snorkelling' },
        { src:surfboards, alt: 'surfing' },
        { src:surfing, alt: 'surfing' },
    ];
    return (
        <div className='Jamaica'>
            <Navigation />
            <section>
                <div className='travelInfo'>
                   <h2>Jamaica</h2> 
                </div>
                <Gallery images={images}/>

            </section>
        </div>
    )
}

export default Jamaica;