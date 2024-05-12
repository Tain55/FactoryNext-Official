import React from 'react';
import image1 from '../Images/About us/image 84.png';
import './ImageStory.css';

const ImageStory = () => {
    return (
        <div className='about-image' style={{ position: 'relative' }}>
            <div className='image-body' style={{
                position: 'relative', // Ensure the image-body div is positioned
                overflow: 'hidden' // Prevents any overflow from child elements
            }}>
                {/* Overlay */}
                <div className='img-overlay' style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(36, 58, 96, 0.299)', // Red overlay with 50% opacity
                    zIndex: 1 // Ensure the overlay is above the image
                }}></div>

                {/* Image */}
                <img className='img' src={image1} alt="" style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block' // Ensures the image behaves as a block element
                }} />
            </div>
            <div className='image-text-ab' style={{zIndex:3}}>
                <p className='image-p'>About Us</p>
            </div>
        </div>
    );
};

export default ImageStory;
