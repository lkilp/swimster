import React from 'react';
import './ActivitiesBlock.scss';
import Activity from './Activity';

import waterAerobics from '../assets/pictures/water-aerobics-chris-hardy-oOm9wYArs5A-unsplash.jpg'
import kids from '../assets/pictures/kid-claude-kid-piche-EHKRwpuQ0ts-unsplash.jpg';
import snorkelling from '../assets/pictures/snorkel-dylan-alcock-1sxp7bWFPhM-unsplash.jpg';

const ActivitiesBlock = () => {
    return (
        <div className='ActivitiesBlock'>
            <Activity title='Water Aerobics' image={waterAerobics} />
            <Activity title='Kids' image={kids} />
            <Activity title='Snorkelling' image={snorkelling} />
        </div>
    )
}

export default ActivitiesBlock;