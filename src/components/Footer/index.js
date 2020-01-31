import React from 'react'
import { Link } from 'gatsby'


import style from './footerStyle.module.scss'

import bg from '../../../static/assets/dots.png'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <img src={bg} className={style.background} />
      <div className={style.menu}>
        <div>
          <h1>About</h1>
          <ul>
            <li><Link to='about'>About Me</Link></li>
            <li><Link to='blog'>News and Press</Link></li>
            <li><Link to='contact'>Contact Me</Link></li>
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
        Copyright © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
