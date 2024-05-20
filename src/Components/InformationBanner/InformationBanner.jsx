import React from 'react';
import './InformationBanner.css'
import banner from '../../Components/Images/About us/aboutCover.png'
import InformationDesk from './../../Pages/InformationDeskPage/InformationDesk';

const InformationBanner = () => {
    return (
        <div>
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
                    backgroundColor: '#2e2e2e50', // Red overlay with 50% opacity
                    zIndex: 1 // Ensure the overlay is above the image
                }}>
                <p className='Info-text'>Information Desk</p>
                </div>

                {/* Image */}
                <img className='img' src={banner} alt="" style={{
                    width: '100%',
                    height: 'auto',
                    minHeight: '300px',
                    display: 'block',
                    objectFit: 'cover' // Ensures the image behaves as a block element
                }} />
            </div>
            
        </div>
            
        </div>
    );
};

export default InformationBanner;