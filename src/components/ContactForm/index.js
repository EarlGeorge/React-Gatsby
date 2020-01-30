import React, { Component } from 'react'

import style from './contactFormStyle.module.scss'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class ContactForm extends Component {
  state = {
    email: '',
    name: '',
    message: '',
    error: false,
    slide: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // change submitting button text on error
  handleButton = () => {
    this.setState({ error: true });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // on successful submitting, change button text
    this.setState({ error: false, slide: true });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => console.log("Message was successfully send!"))
      .catch(console.error)
  }

  render() {
    // on successful submitting, slide button animation
    const slideButton = this.state.slide ? `${style.button_slide}` : `${style.button}`
    // on successful submitting, thanks message animation
    const slideText = this.state.slide ? `${style.thanks_active}` : `${style.thanks}`

    // Determines when contact-form was send. : ))
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    let timeOff

    if (hours >= 5 && hours < 12) {
      timeOfDay = "Good morning,"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "Good afternoon,"
    } else if (hours >= 18 && hours < 21) {
      timeOfDay = "Good Evening,"
    } else if (hours >= 21 || hours < 5) {
      timeOff = ", good night."
    }

    return (
      <form className={style.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <h1 className={style.title}>Get in touch</h1>

        <div className={style.field}>
          <input type="text" name="name" onChange={this.handleChange} required />
          <label htmlFor="name" placeholder="NAME"></label>
        </div>

        <div className={style.field}>
          <input type="email" name="email" onChange={this.handleChange} required />
          <label htmlFor="email" placeholder="EMAIL"></label>
        </div>

        <div className={style.field}>
          <textarea name="message" onChange={this.handleChange} required />
          <label htmlFor="message" placeholder="MESSAGE"></label>
        </div>

        {/* Spam Filtering using 'netlify-honeypot' instead of reCAPTCHA2 */}
        <label className={style.hidden}>Don’t fill this out if you're human: <input name="bot-field" onChange={this.handleChange} /></label>

        <button className={slideButton} type="submit" onClick={this.handleButton} style={this.state.error ? { border: 'solid 1px red' } : null}>
          {this.state.error ? 'error occurred while Sending a Message' : 'Send Message'}
        </button>

        <span className={slideText}>{timeOfDay} Thanks {this.state.name} for your message{timeOff}</span>

      </form>
    )
  }
}
