import React from 'react';
import image1 from '../Images/About us/image 84.png';
import './ImageStory.css'

const ImageStory = () => {
    return (
        <div className='about-image'>
            <div className='image-body'>
                <img className='img' src={image1} alt="" />
            </div>
            <div className='image-text-ab'>
                <p className='image-p'>About Us</p>
            </div>
        </div>

    );
};

export default ImageStory;