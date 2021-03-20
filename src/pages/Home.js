import Footer from '../components/Footer';
import Header from '../components/Header';
import Quote from '../components/Quote';
import Travel from '../components/Travel';

import React from 'react';
import ActivitiesBlock from '../components/ActivitiesBlock';
const Home = () => {
    return (
        <div className='Home'>
            <Header/>
            <Quote quote='"Home is where the pool is."' />
            <ActivitiesBlock />
            <Quote quote='"If you&apos;re having a bad day, catch a wave." -Frosty Hesson' />
            <Travel />
            <Footer />
        </div>
    );
}

export default Home;