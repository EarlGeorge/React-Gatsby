import React, { Component } from 'react'
import { Link } from 'gatsby'


import style from './headerStyle.module.scss'

import logo from '../../../static/assets/react-icon.svg'

export default class Index extends Component {

    state = {
        active: false,
    }

    handleOpen = () => {
        if (this.state.active == false) {
            this.setState({ active: true })
        }
        else {
            this.setState({ active: false })
        }
        // not the best way to use ID in react but now it's ok.
        document.getElementById('changesize').classList.toggle(`${style.children}`)
    }

    render() {
        // active button-X OR initial hamburger
        const hamburger = this.state.active ? (`${style.hamburger} ${style.hamburgerActive}`) : `${style.hamburger}`
        // overlay 'navbar + before transition' OR initial navbar style
        const navbar = this.state.active ? (`${style.overlayActive} ${style.overlay}`) : `${style.initialNav}`
        const line = `${style.activeButton}`

        return (
            <header className={style.header}>
                <div className={style.container}>

                    <Link to="/">
                        <img src={logo} alt="Logo" className={style.logo} />
                    </Link>

                    <div className={hamburger} onClick={this.handleOpen}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <nav className={navbar}>
                        <ul>
                            <li><Link activeClassName={line} to="/">Main</Link></li>
                            <li><Link activeClassName={line} to="/about">About</Link></li>
                            <li><Link activeClassName={line} to="/contact">Contact</Link></li>
                            <li><Link activeClassName={line} to="/blog">Blog</Link></li>
                            <li><Link activeClassName={line} to="/gallery">Gallery</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

