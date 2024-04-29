import './Image.css'
import img22 from '../Images/image 22.png'

import React from 'react';

const image = () => {
    return (
        <div>
            <div className='image-body'>
                <img className='img' src={img22}  />
            </div>
            <div className='image-text  bold'>
                <p>Technology Ecosystem for Smart Factories</p>
            </div>
            
        </div>
    );
};

export default image;