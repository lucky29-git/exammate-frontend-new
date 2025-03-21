import React from 'react'
import './Card.css'

export const Cards = ({ shortForm, fullForm, bgImage, bgColor }) => {
  return (
    <div className="card">
      <div className="card-inner">
        {/* Front Side - Short Form */}
        <div className="card-front" style={{ backgroundColor: `${bgColor}` }}>
          <h2>{shortForm}</h2>
        </div>

        {/* Back Side - Full Form with Background Image */}
        <div className="card-back" style={{ backgroundImage: `url(${bgImage})` }}>
          <h3>{fullForm}</h3>
        </div>
      </div>
    </div>
  )
}
