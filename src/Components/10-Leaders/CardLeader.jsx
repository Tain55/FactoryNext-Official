import React from 'react';
import './CardLeader.css'; // Importing the CSS file for styling
import images from '../Images/Challenges/image 30.png';

const CardC = ({ title1, title2, image }) => {
  return (
    <div className="cardL">
      <div className='cardimageL'><img src={image} alt="" className='imageLeader'/></div>
      <p className='cardL1'>{title1}</p>
      <p className='cardL2'>{title2}</p>
    </div>
  );
};

export default CardC;
