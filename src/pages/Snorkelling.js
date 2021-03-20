import React from 'react';
import Navigation from '../components/Navigation';
import './Snorkelling.scss';

const Snorkelling = () => {
    return (
        <div className='Snorkelling'>
            <Navigation />
            <section>
                <div className='info'>
                    <h2>Snorkelling classes starting this fall.</h2> 
                    <h2>Stay tuned for more information!</h2>
                </div>
            </section>
        </div>
    )
}

export default Snorkelling;