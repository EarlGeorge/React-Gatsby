import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'


import style from './blogCard.module.scss'

const index = props => {
  return (
    <Link to={`/blog/${props.path}`}>
      <article className={style.card}>
        <img src={props.img} alt="Card image"/>
        <div className={style.content}>
          <h4>{props.title}</h4>
          <h3>
            {props.tags.map(tag => (
              <span key={tag}>
                {tag}
              </span>
            ))}
          </h3>
        </div>
      </article>
    </Link>
  )
}

index.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array
}

export default index
