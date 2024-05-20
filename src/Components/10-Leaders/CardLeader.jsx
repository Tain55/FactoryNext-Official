import React from 'react';
import './CardLeader.css'; // Importing the CSS file for styling
import images from '../Images/Challenges/image 30.png';
import logo1 from '../Images/Leaders/Vector.png'
import logo2 from '../Images/Leaders/Vector2.png'

const CardC = ({ title1, title2, image }) => {
  return (
    <div className="cardL">
      <div className='background-card'>
      <div>
        <div className='cardLtransparent-gap'>
          <div className='cardLCircle1'></div>
          <div className='cardLCircle2'></div>
        </div>
      </div>
        <div className='cardimageL'><img src={image} alt="" className='imageLeader'/></div>
        <div className='cardL-details'>
          <p className='cardL1'>{title1}</p>
          <p className='cardL2'>{title2}</p>
        </div>
        <div className='logosLeader'><img src={logo1} alt="" /><img src={logo2} alt="" /></div>
      </div>
    </div>
  );
};

export default CardC;
