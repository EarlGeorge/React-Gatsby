import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './searchBarStyle.module.scss'

export default class Index extends Component {
  state = {
    active: false,
    info: false,
    text: '',
    loopNum: 0,
    typingSpeed: 110,
    dataText: ['What are you looking for?']
  }

  handleOpen = () => {
    if (this.state.active == false) {
      this.setState(prevState => {
        return { active: !prevState.active }
      })
    }
    else {
      this.setState({ active: false })
    }

    const typing = () => {
      const { loopNum, text, typingSpeed } = this.state;
      const { dataText } = this.state;
      // Current index of word  // LoopNum = 0 
      const i = loopNum % dataText.length;
      // Get full text of current word
      const fullText = dataText[i];

      if (text.length === 25) {
        return
      }

      this.setState({
        text: fullText.substring(0, text.length + 1)
      })

      setTimeout(typing, typingSpeed)
      // console.log(fullText.substring(0, text.length + 1))
    }
    typing()
  }

  span = () => {
    if (this.state.info == false) {
      this.setState(prevState => {
        return { info: !prevState.info }
      })
    }
    else {
      this.setState({ info: false })
    }
  }

  render() {
    const input = this.state.active ? `${style.active}` : null
    const span = this.state.info ? `${style.span_active}` : `${style.span}`

    return (
      <div className={style.search}>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/search.svg" alt="search button" onClick={this.handleOpen} />
        <input type="text" className={input} placeholder={this.state.text} onChange={this.props.searching} onKeyDown={this.span} />
        <span className={span}>Search result</span>
      </div>
    )
  }
}

Index.propTypes = {
  searching: PropTypes.func
}