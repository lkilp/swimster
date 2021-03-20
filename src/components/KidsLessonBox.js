import React, { useState } from 'react';
import './KidsLessonBox.scss';


const KidsLessonBox = (props) => {
    const {lesson, i} = props;
    const [hover, setHover] = useState(false);

    const onOver = () => setHover(true);
    const onOut = () => setHover(false);

    return <div onMouseEnter={onOver} onMouseLeave={onOut}
        className={`KidsLessonBox group${i+1}`}>
            {!hover && lesson.text}
            {hover && <div className="bg" />}
            {hover && <div class="texts">{lesson.hoverDays}</div>}
            {hover && <div class="texts">{lesson.hoverTimes}</div>}
 
            </div>;
}

export default KidsLessonBox;