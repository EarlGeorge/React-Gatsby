import React from 'react'
import style from './socialStyle.module.scss'

/**
 * Social Icons Component
 **/

const Social = props => {
  return (
    <div className={style.social}>
      <a
        href={props.twitter}
        target="_blank"
        className={`${style.icon} ${style.twitter}`}
      />
      <a
        href={props.instagram}
        target="_blank"
        className={`${style.icon} ${style.instagram}`}
      />
      <a
        href={props.github}
        target="_blank"
        className={`${style.icon} ${style.github}`}
      />
    </div>
  )
}

export default Social
