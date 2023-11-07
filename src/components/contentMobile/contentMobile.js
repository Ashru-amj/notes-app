

import React from 'react'
import "./contentMobile.css";


const contentMobile = ({note}) => {
  return (
    <div className="mobody">
      <div className="mobdetails">
        <div className="mobile__notes__content__date">{note.date}</div>
        <div className="mobile__notes__content__time">{note.time}</div>
      </div>
      <div className="mobile__notes__content__details">
        <p>{note.content}</p>
      </div>
    </div>
  )
}

export default contentMobile
