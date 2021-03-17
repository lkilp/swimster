import React from 'react';
import './Quote.scss';

const Quote = (props) => {
    return (
        <div className='Quote'>
            {props.quote}
        </div>
    )
}

export default Quote;