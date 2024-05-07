import './Solutions.css';
import img1 from '../Images/solution images/image1.png'
import img2 from '../Images/solution images/image2.png'
import img3 from '../Images/solution images/image3.png'
import img4 from '../Images/solution images/image 82.png'
import img5 from '../Images/solution images/image 83.png'

import React from 'react';
import image from './../2-Image/Image';

const Solutions = () => {
    return (
        <div className='solution-1'>
            <div className='solution-2'>
                <p className='title modifySmart'>Smart Factory Solutions</p>
                <div className='solution-contents'>
                    <div className='solution-boxes'>
                        <div className='image SModify'>
                            <img src={img1} alt="" />
                        </div>
                        <p className='solution-des'>Machine and Process Monitoring</p>
                    </div>
                    <div className='solution-boxes'>
                        <div className='image SModify'>
                            <img src={img2} alt="" />
                        </div>
                        <p className='solution-des'>Environment Monitoring</p>
                    </div>
                    <div className='solution-boxes'>
                    	<div className='image SModify'>
                            <img src={img3} alt="" />
                        </div>
                        <p className='solution-des'>Energy & Utility Monitoring</p>
                    </div>
                </div>
                <div className='solution-contents-2'>
                    <div className='solution-boxes'>
                        <div className='image SModify'>
                            <img src={img4} alt="" />
                        </div>
                        <p className='solution-des'>AI Features</p>
                    </div>
                    <div className='solution-boxes'>
                        <div className='image SModify'>
                            <img src={img5} alt="" />
                        </div>
                        <p className='solution-des'>IR Transformation Design & Consultancy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;