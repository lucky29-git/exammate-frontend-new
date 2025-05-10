import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'

export const Cards = ({ shortForm, fullForm, bgImage, bgColor, branch }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/getPapers', { state: { branch } });
  };
  return (
    <div className="card" style={{ backgroundColor: bgColor, backgroundImage: `url(${bgImage})` }} onClick={handleClick}>
      <div className="card-content flex justify-center items-center">
        {/* <h2>{shortForm}</h2> */}
        <p className='text-black text-2xl font-bold'>{fullForm}</p>
      </div>
    </div>
  );
}
