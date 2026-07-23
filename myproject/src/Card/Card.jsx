import React from 'react'
import './Card.css'

 const Card = (props) => {
  return (
    // <!-- From Uiverse.io by joe-watson-sbf --> 
<div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">{props.title}</p>
            <p>{props.Fcontent}</p>
        </div>
        <div className="flip-card-back">
            <p className="title">{props.backTitle}</p>
            <p>{props.Bcontent}</p>
        </div>
    </div>
</div>
  )
}

export default Card


