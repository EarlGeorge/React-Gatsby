import React from 'react'
import { Link } from 'gatsby'
import style from './footerStyle.module.scss'

/**
 * Footer Component
 **/

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.copyright}>
        George Davituri © {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
