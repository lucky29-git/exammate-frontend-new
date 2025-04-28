import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'

export const Cards = ({ shortForm, fullForm, bgImage, bgColor, to }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (to) {
      if (to.startsWith('http')) {
        window.location.href = to;
      } else {
        navigate(to);
      }
    }
  };
  return (
    <div className="card" onClick={handleClick} style={{ cursor: to ? 'pointer' : 'default' }}>
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
