import './Social.css'
import image65 from '../../Components/Images/newimage.jpeg';

import React from 'react';
import { Link } from 'react-router-dom';

const Social = () => {
    return (
        <div>
            <div className='social-body'>
                <div className='social-left'>
                    <div className='social-left-content'>
                        <p className='social-title'>Social Initiatives</p>
                        <p className='social-description'>To create a future where every breath sustains life, fostering a Bangladesh where clean air is a fundamental right, and communities thrive in harmony with their environment.</p>
                        <p className='social-description'>The goal of the Open Air Project is to bring in a new era of air quality control in Bangladesh. We work to improve public health, protect the environment, and leave a lasting legacy for future generations by using innovative technology, inspiring community involvement, and encouraging for systemic change.</p>
                        <div className='Social-Button'><a style={{textDecoration:'none', color: '#1570ef'}} href="https://openair.factorynext.com.bd/"  rel="noreferrer">Know More</a></div>
                    </div>
                </div>
                <div className='social-right'>
                    <a style={{textDecoration:'none', cursor:'pointer'}} href="https://openair.factorynext.com.bd/"  rel="noreferrer"><img src={image65}  style={{borderRadius:'8px'}} alt="" /></a>
                </div>

                
            </div>
            <div className='social-deign-2'>
                <p className='title'>Social Initiatives</p>
                <a  style={{textDecoration:'none', cursor:'pointer'}} href="https://openair.factorynext.com.bd/"  rel="noreferrer"><div className='social-image-small' style={{cursor:'pointer'}}><img src={image65} alt="" style={{cursor:'pointer'}}/></div></a>
                <p className='social_description_small'>To create a future where every breath sustains life, fostering a Bangladesh where clean air is a fundamental right, and communities thrive in harmony with their environment.</p>
                <p className='social_description_small'>The goal of the Open Air Project is to bring in a new era of air quality control in Bangladesh. We work to improve public health, protect the environment, and leave a lasting legacy for future generations by using innovative technology, inspiring community involvement, and encouraging for systemic change.</p>
                
                
                    <div className='Social-Button'><a style={{textDecoration:'none', color: '#1570ef'}} href="https://openair.factorynext.com.bd/"  rel="noreferrer">Know More</a></div>
                
            </div>
        </div>
    );
};

export default Social;