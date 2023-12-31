


import React from 'react'
import "./homepageDesktop.css";
import home from "../../images/home.png"
import lock from "../../images/icons/lock.png"

const homepageDesktop = () => {
  return (
    <div className='desktop__home'>
      <img src={home} alt="home" />
      <h1>Pocket Notes</h1>
      <p>Send and receive messages without keeping your phone online.<br/>Use Pocket Notes on up to 4 linked Devices and 1 mobile phone.</p>
      <div className="desktop__home__bottom">
        <img src={lock} alt="lock" />
        <span>end-to-end encrypted</span>
      </div>
    </div>
  )
}

export default homepageDesktop
