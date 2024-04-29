import './Core.css';
import image1 from '../Images/Core images/image 34.png';
import image2 from '../Images/Core images/image 36.png';
import image3 from '../Images/Core images/image 37.png';

import React from 'react';

const Core = () => {
    return (
        <div>
            <div className='core'>
            <div className='core-body'>
                <p className='title'>Core Components</p>
                <p className='sub-title'>The ecosystem of smart factory tools and technologies</p>
                <div className='core-details'>
                    <div className='core-content core-1'>
                        <div className='image'><img src={image1} alt="" /></div>
                        <p className='core-descriprion'>IoT Sensors, Data Acquisition, Control Devices, & Data Gateways</p>
                    </div>

                    <div className='core-content core--2'>
                        <div className='image'><img src={image2} alt="" /></div>
                        <p className='core-descriprion'>Connectivity, Cloud Computing, and User Applications</p>
                    </div>

                    <div className='core-content core-3'>
                        <div className='image'><img src={image3} alt="" /></div>
                        <p className='core-descriprion'>Artificial Intelligence for Improved Efficiency</p>

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Core;    