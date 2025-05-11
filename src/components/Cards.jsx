import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'

export const Cards = ({ shortForm, fullForm, bgImage, bgColor, branch }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/getPapers', { state: { branch } });
  };
  return (
    // <div className="card" style={{ backgroundColor: bgColor, backgroundImage: `url(${bgImage})` }} onClick={handleClick}>
    //   <div className="card-content flex justify-center items-center">
    //     <h2>{shortForm}</h2>
    //     <p className='text-black text-2xl font-bold'>{fullForm}</p>
    //   </div>
    // </div>

    <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-front" style={{ backgroundColor: bgColor }}>
          <h2>{shortForm}</h2>
        </div>

        {/* Back Side */}
        <div className="card-back" style={{ backgroundImage: `url(${bgImage})` }}>
          <p className="text-grey text-2xl font-bold">{fullForm}</p>
        </div>
      </div>
    </div>
  );
}
