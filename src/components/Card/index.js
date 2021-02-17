import React from 'react'
import PropTypes from 'prop-types'
import style from './cardStyle.module.scss'

/**
 * Card Component
**/

const Index = props => {
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

Index.propTypes = {
  title: PropTypes.string,
  body: PropTypes.any,
  img: PropTypes.string
}

export default Index
