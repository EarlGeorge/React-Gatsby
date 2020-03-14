import React from 'react'
import TimelineItem from './TimelineItem'
import style from './timelineStyle.module.scss'


const Timeline = ({ data }) => {
    return (
        data.length > 0 && (
            <div className={style.timeline_container}
            >
                {data.map((data, id) => (
                    <TimelineItem data={data} key={id} />
                ))}
            </div>
        )
    )
}

export default Timeline
