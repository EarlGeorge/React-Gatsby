import React from 'react'
import style from './socialStyle.module.scss'

const Social = (props) => {
    return (
        <div className={style.social}>
            <a href={props.instagram} className={`${style.icon} ${style.instagram}`} />
            <a href={props.github} className={`${style.icon} ${style.github}`} />
            <a href={props.google} className={`${style.icon} ${style.google}`} />
            <a href={props.twitter} className={`${style.icon} ${style.twitter}`} />
        </div>
    )
}

export default Social
