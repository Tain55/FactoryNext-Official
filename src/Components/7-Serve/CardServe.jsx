import React from 'react';
import './CardServe.css'; // Importing the CSS file for styling

const CardServe = ({ title, image, description }) => {

  return (
    <div className="cardServe" style={{backgroundImage: `url(${ image })`}}>
      <div className='background-shadow'>
        <p>{title}</p>
        <p className='descriptionCardServe'>{description}</p>
      </div>
    </div>
  );
};

export default CardServe;
