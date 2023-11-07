

import React from 'react'
import "./contentDesktop.css";


const contentDesktop = ({note}) => {
  return (
    <div className="dnote">
      <div className="details">
        <div className="dedate">{note.date}</div>
        <div className="detime">{note.time}</div>
      </div>
      <div className="desktop__notes__content__details">
        <p>{note.content}</p>
      </div>
    </div>
  )
}

export default contentDesktop

