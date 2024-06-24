import React from 'react';
import './OurSolutionBanner.css'
import banner from '../../Components/Images/solution images/solutionBanner.png'
import InformationDesk from './../../Pages/InformationDeskPage/InformationDesk';
import { RiArrowDownDoubleFill } from "react-icons/ri";

const OurSolutionBanner = () => {
    return (
        <div className='solutionBanner'>
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
                    zIndex: 1 // Ensure the overlay is above the image
                }}>
                <div className='bannerContents'>
                        <div className='aboutUs' style={{zIndex:3}}>
                            <p className='image-p'>Our Solutions</p>
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
                <img className='img' src={banner} alt="" style={{
                    width: '100%', 
                    objectFit: 'cover' // Ensures the image behaves as a block element
                }} />
            </div>
            
        </div>
            
        </div>
    );
};

export default OurSolutionBanner;