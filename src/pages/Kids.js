import React from 'react';
import KidsLessonBox from '../components/KidsLessonBox';
import Navigation from '../components/Navigation';
import './Kids.scss';


const Kids = () => {
    const lessons = [
        { text:'0-2 years', hoverDays:'Monday & Wednesday', hoverTimes:'9AM'},
        { text:'3-5 years', hoverDays:'Tuesday & Thursday', hoverTimes:'10AM'},
        { text:'6-10 years', hoverDays:'Monday & Wednesday', hoverTimes:'5PM'},
        { text:'11-14 years', hoverDays:'Monday & Friday', hoverTimes:'6PM'},
    ]
    return (
        <div className='Kids'>
            <Navigation />
            <section>
                <h2>Swimming lessons for kids</h2>
                <div className='ages'>
                    {lessons.map((lesson, i) => {
                        return <KidsLessonBox lesson={lesson} i={i} />;
                    })}
                </div>
            </section>
        </div>
    )
}

export default Kids;