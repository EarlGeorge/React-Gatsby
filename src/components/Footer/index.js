import React from 'react'
import { Link } from 'gatsby'
import style from './footerStyle.module.scss'
import bg from '../../../static/assets/dots.png'

/**
 * Footer Component
**/

const Footer = () => {
  return (
    <footer className={style.footer}>
      <img src={bg} className={style.background} />
      <div className={style.menu}>
        <div>
          <h1>About</h1>
          <ul>
            <li><Link to='about'>About Me</Link></li>
            <li><Link to='blog'>News and Blog</Link></li>
            <li><Link to='contact'>Contact</Link></li>
          </ul>
        </div>
        <div>
          <h1>Services</h1>
          <ul>
            <li><Link to='contact'>Get Involved</Link></li>
            <li><Link to='contact'>Support</Link></li>
          </ul>
        </div>
      </div>
      <div className={style.copyright}>
        George Davituri © {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
