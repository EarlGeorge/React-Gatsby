import React, { Component } from 'react'
import PropTypes from 'prop-types'


import style from './galleryCard.module.scss'

export default class index extends Component {

  state = {
    change : false
  }

  button = () => {
    if (this.state.change == false) {
      this.setState({change: true})
    }
    else {
      this.setState({change: false})
    }
  }

  render() {
    // Zoom In/Out on click event. 
    const applyStyle = this.state.change === true ? `${style.zoomIn}` : `${style.galleryCard}`
    // Add Close-icon when picture was zoomed.
    const change = this.state.change === true ? `${style.close}` : `${style.hide}`

    const {name, img} = this.props;

    return (
      <div className={applyStyle}>
        <span className={change} onClick={this.button}>&times;</span>
        <h1>{name}</h1>
        <img src={img} alt={name} onClick={this.button}/> 
      </div>
    )
  }
}

index.propTypes = {
  name: PropTypes.string
}