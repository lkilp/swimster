import React from 'react';


import './App.scss';
import ActivitiesBlock from './components/ActivitiesBlock';
import Footer from './components/Footer';
import Header from './components/Header';
import Quote from './components/Quote';
import Travel from './components/Travel';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Quote quote='"Home is where the pool is."' />
      <ActivitiesBlock />
      <Quote quote='"If you&apos;re having a bad day, catch a wave." -Frosty Hesson' />
      <Travel />
      <Footer />
    </div>
  );
}


export default App;
