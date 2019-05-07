import React from 'react'
import {Link} from 'gatsby'


import style from './footer.module.scss'

import bg from '../../../static/assets/dots.png'

const footer = () => {
  return (
    <footer className={style.footer}>
       <img src={bg} className={style.background}/>
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
              <li><Link to=''>Products</Link></li>
              <li><Link to='contact'>Get Involved</Link></li>
              <li><Link to=''>Support</Link></li>
              <li><Link to=''>Overview</Link></li>
            </ul>
          </div>
          <div>
            <h1>General</h1>
            <ul>
              <li><Link to=''>Terms of Use</Link></li>
              <li><Link to=''>Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className={style.copyright}>
          Copyright © {new Date().getFullYear()} All rights reserved.
        </div>
    </footer>
  )
}

export default footer
