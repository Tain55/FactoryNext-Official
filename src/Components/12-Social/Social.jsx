import './Social.css'
import image65 from '../../Components/Images/image 65.png';

import React from 'react';

const Social = () => {
    return (
        <div>
            <div className='social-body'>
                <div className='social-left'>
                    <div className='social-left-content'>
                        <p className='social-title'>Social Initiatives</p>
                        <p className='social-description'>To create a future where every breath sustains life, fostering a Bangladesh where clean air is a fundamental right, and communities thrive in harmony with their environment.</p>
                        <p className='social-description'>The goal of the Open Air Project is to bring in a new era of air quality control in Bangladesh. We work to improve public health, protect the environment, and leave a lasting legacy for future generations by using innovative technology, inspiring community involvement, and encouraging for systemic change.</p>
                        <div className='Social-Button'>Know More</div>
                    </div>
                </div>
                <div className='social-right'>
                    <img src={image65} alt="" />
                </div>
            </div>
            <div className='social-deign-2'>
                <p className='title'>Social Initiatives</p>
                <div className='social-image-small'><img src={image65} alt="" /></div>
                <p className='social_description_small'>To create a future where every breath sustains life, fostering a Bangladesh where clean air is a fundamental right, and communities thrive in harmony with their environment.</p>
                <p className='social_description_small'>The goal of the Open Air Project is to bring in a new era of air quality control in Bangladesh. We work to improve public health, protect the environment, and leave a lasting legacy for future generations by using innovative technology, inspiring community involvement, and encouraging for systemic change.</p>
                <div className='Social-Button'>Know More</div>
            </div>
        </div>
    );
};

export default Social;