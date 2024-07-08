import './Footprints.css';
import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import image1 from './../Images/Footprints logos/image 47.png';
import image2 from './../Images/Footprints logos/image 48.png';
import image3 from './../Images/Footprints logos/image 49.png';
import image4 from './../Images/Footprints logos/north-west-logo_2.png';
import image5 from './../Images/Footprints logos/image 51.png';
import image6 from './../Images/Footprints logos/image 52.png';
import image7 from './../Images/Footprints logos/image 53.png';
import image8 from './../Images/Footprints logos/image 54.png';
import image9 from './../Images/Footprints logos/image 55.png';
import image10 from './../Images/Footprints logos/image 56.png';
import image11 from './../Images/Footprints logos/image 57.png';
import image12 from './../Images/Footprints logos/image 58.png';
import image13 from './../Images/Footprints logos/rahimafroz.png';
import agroshift from './../Images/Footprints logos/agroshift.svg';

import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const Footprints = () => {
    const [counted, setCounted] = useState(false);

    const onEnterViewport = () => {
        setCounted(true);
    };

    const onExitViewport = () => {
        setCounted(true);
    };


    const [isActive, setIsActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  
    const handleClick = () => {
      if (!isLoading) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setIsActive(!isActive);
        }, 500);
      }
    };

    return (
        
            <div className='footbody-1'>
                <div className='footbody-2'>
                    <p className='footprinttitle'>Successful Footprints</p>
                <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
                    <div className='foot-nuber'>
                        <div className='foot-number-box'>
                            <p className='number'><CountUp end={counted ? 70 : 0} duration={3} redraw={true} /> +</p>
                            <p className='text'>Active Sites</p>
                        </div>
                        <div className='foot-number-box'>
                            <p className='number'><CountUp end={counted ? 60 : 0} duration={3} redraw={true} /> +</p>
                            <p className='text'>Regular Users</p>
                        </div>
                        <div className='foot-number-box'>
                            <p className='number'><CountUp end={counted ? 1000 : 0} duration={3} redraw={true} /> +</p>
                            <p className='text'>Live IoT Devices</p>
                        </div>
                        <div className='foot-number-box'>
                            <p className='number'><CountUp end={8} duration={3} redraw={true} /> +</p>
                            <p className='text'>Industries</p>
                        </div>
                        <div className='foot-number-box final'>
                            <p className='number'><CountUp end={counted ? 10 : 0} duration={3} redraw={true} /> +</p>
                            <p className='text'>Ongoing Pilots</p>
                        </div>
                    </div>
                    <div className='foot-nuber-small'>
                        <div className='footer-first-row'>
                            <div className='foot-number-box-small footB1'>
                                <p className='number-small'><CountUp end={counted ? 70 : 0} duration={3} redraw={true} /> +</p>
                                <p className='text-small'>Active Sites</p>
                            </div>
                            <div className='foot-number-box-small footB1'>
                                <p className='number-small'><CountUp end={counted ? 60 : 0} duration={3} redraw={true} /> +</p>
                                <p className='text-small'>Regular Users</p>
                            </div>
                            <div className='foot-number-box-small footB2'>
                                <p className='number-small'><CountUp end={counted ? 1000 : 0} duration={3} redraw={true} /> +</p>
                                <p className='text-small'>Live IoT Devices</p>
                            </div>
                        </div>
                        <div className='footer-second-row'>
                            <div className='foot-number-box-small2 footB3'>
                                <p className='number-small'>8 +</p>
                                <p className='text-small'>Industries</p>
                            </div>
                            <div className='foot-number-box-small2 footB5'>
                                <p className='number-small'><CountUp end={counted ? 10 : 0} duration={3} redraw={true} /> +</p>
                                <p className='text-small'>Ongoing Pilots</p>
                            </div>
                        </div>
                    </div>
                    
                </ScrollTrigger>
                    <p className='logo-box-title'>15+ Trusted Clients</p>
                    <div className='logo-box-grid'>
                        <div className='logo-box'><img src={image1} alt="" /></div>
                        <div className='logo-box'><img src={image2} alt="" /></div>
                        <div className='logo-box'><img src={image4} alt="" /></div>
                        <div className='logo-box'><img src={image5} alt="" /></div>
                        <div className='logo-box'><img src={image6} alt="" /></div>
                        <div className='logo-box'><img src={image7} alt="" /></div>
                        <div className='logo-box'><img src={image8} alt="" /></div>
                        <div className='logo-box' ><img src={image9} alt="" /></div>
                        <div className='logo-box' style={{ display: isActive ? 'block' : 'none'}}><img src={image10} alt="" /></div>
                        <div className='logo-box footLogo' style={{ display: isActive ? 'block' : 'none'}}><img src={image11} alt="" /></div>
                        <div className='logo-box footLogo' style={{ display: isActive ? 'block' : 'none'}}><img src={image12} alt="" /></div>
                        <div className='logo-box logo-box2 footLogo' style={{ display: isActive ? 'block' : 'none'}}><img src={image13} alt="" /></div>
                        <div className='logo-box' style={{ display: isActive ? 'block' : 'none'}}><img src={agroshift} alt="" /></div>
                    </div>
                    {/* <div className='button-width' >
                        Load More
                        
                    </div> */}
                        
                        
                    <div>
      <div className='button-width' onClick={handleClick}>
        {!isLoading ? (isActive ? '' : 'Load More') : (
          <ClipLoader color={'#1570ef95'} loading={true} css={override} size={20} />
        )}
      </div>
    </div>
    </div>




            </div>
        
    );
};


const override = css`
  display: block;
  margin: 0 auto;
`;

export default Footprints;
