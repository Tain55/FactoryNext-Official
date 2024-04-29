import React from 'react';
import './CardC.css'; // Importing the CSS file for styling
import images from '../Images/Challenges/image 30.png';

const CardC = ({ title, image }) => {
  return (
    <div className="card">
      <img src={image} alt="" className='imageC'/>
      <p>{title}</p>
    </div>
  );
};

export default CardC;
