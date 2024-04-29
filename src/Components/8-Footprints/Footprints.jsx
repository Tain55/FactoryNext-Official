import './Footprints.css'
import React from 'react';
import image from './../2-Image/Image';
import image1 from './../Images/Footprints logos/image 47.png'
import image2 from './../Images/Footprints logos/image 48.png'
import image3 from './../Images/Footprints logos/image 49.png'
import image4 from './../Images/Footprints logos/image 50.png'
import image5 from './../Images/Footprints logos/image 51.png'
import image6 from './../Images/Footprints logos/image 52.png'
import image7 from './../Images/Footprints logos/image 53.png'
import image8 from './../Images/Footprints logos/image 54.png'
import image9 from './../Images/Footprints logos/image 55.png'
import image10 from './../Images/Footprints logos/image 56.png'
import image11 from './../Images/Footprints logos/image 57.png'
import image12 from './../Images/Footprints logos/image 58.png'
import { IoIosArrowDown } from "react-icons/io";
const Footprints = () => {
    return (
        <div className='footbody-1'>
            <div className='footbody-2'>
                <p className='title more'>Successful Footprints</p>
                <div className='foot-nuber'>
                    <div className='foot-number-box'>
                        <p className='number'>70 +</p>
                        <p className='text'>Active Sites</p>
                    </div>
                    <div className='foot-number-box'>
                        <p className='number'>60 +</p>
                        <p className='text'>Regular Users</p>
                    </div>
                    <div className='foot-number-box'>
                        <p className='number'>1000 +</p>
                        <p className='text'>Live IoT Devices</p>
                    </div>
                    <div className='foot-number-box'>
                        <p className='number'>8 +</p>
                        <p className='text'>Industries</p>
                    </div>
                    <div className='foot-number-box final'>
                        <p className='number'>10 +</p>
                        <p className='text'>Ongoing Pilots</p>
                    </div>
                </div>
                <p className='logo-box-title'>15+ Trusted Clients</p>
                <div className='logo-box-grid'>
                    <div className='logo-box'><img src={image1} alt="" /></div>
                    <div className='logo-box'><img src={image2} alt="" /></div>
                    <div className='logo-box'><img src={image3} alt="" /></div>
                    <div className='logo-box'><img src={image4} alt="" /></div>
                    <div className='logo-box'><img src={image5} alt="" /></div>
                    <div className='logo-box'><img src={image6} alt="" /></div>
                    <div className='logo-box'><img src={image7} alt="" /></div>
                    <div className='logo-box'><img src={image8} alt="" /></div>
                    <div className='logo-box'><img src={image9} alt="" /></div>
                    <div className='logo-box'><img src={image10} alt="" /></div>
                    <div className='logo-box'><img src={image11} alt="" /></div>
                    <div className='logo-box'><img src={image12} alt="" /></div>
                </div>

                <div className='button-width'>
                    <button>View More <IoIosArrowDown className='icon-down'/></button>
                </div>
            </div>
        </div>
    );
};

export default Footprints;