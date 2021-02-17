import React from 'react'
import style from './cubeStyle.module.scss'

const Cube = () => {
  return (
    <React.Fragment>
      <div className={style.wrap}>
        <div className={style.wtf} />
        <div className={style.box}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Cube
