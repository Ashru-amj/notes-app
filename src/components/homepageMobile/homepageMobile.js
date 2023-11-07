


import React from 'react'
import "./homepageMobile.css";
import notes from "../../images/notes.jpg"


const homepageMobile = () => {
  return (
    <div
      className="mobile__home"
      style={{
        backgroundImage: `url(${notes})`,
      }}
    >
      Create Your First Note...
    </div>
  )
}

export default homepageMobile
