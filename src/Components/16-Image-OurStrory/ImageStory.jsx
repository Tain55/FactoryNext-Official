import React from 'react';
import image1 from '../Images/About us/AboutBanner/cement-plant-sunset 1.png';
import './ImageStory.css';
import { RiArrowDownDoubleFill } from "react-icons/ri";

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
                    // backgroundColor: 'linear-gradient(180deg, rgba(0, 0, 0, 0.81) 0%, rgba(0, 0, 0, 0.57) 45.25%, rgba(0, 0, 0, 0.45) 57%, rgba(0, 0, 0, 0.27) 100%)', // Red overlay with 50% opacity
                    // backgroundColor: '#2e2e2e50',
                    zIndex: 1 // Ensure the overlay is above the image
                }}>
                    <div className='bannerContents'>
                        <div className='aboutUs' style={{zIndex:3}}>
                            <p className='image-p'>About Us</p>
                        </div>
                        <div className='scrolldown'>
                            <div className='scrollDownHeight'>
                                <p>Scroll Down</p>
                                <RiArrowDownDoubleFill className='scroll_icon'/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <img className='img' src={image1} alt="" />
            </div>
            
        </div>
    );
};

export default ImageStory;
