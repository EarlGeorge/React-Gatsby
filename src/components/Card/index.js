import React from 'react'
import PropTypes from 'prop-types'


import style from './card.module.scss'

const index = props => {
  return (
    <div className={style.card}>
      <div className={style.content}>
         <h4>{props.title}</h4>
         <p>{props.body}</p>
         <img src={props.img} /> 
      </div>
    </div>
  )
}

index.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
}

export default index
