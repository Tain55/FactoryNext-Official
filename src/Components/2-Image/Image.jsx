import './Image.css'
import img22 from '../Images/image 22.png'
import React from 'react';
import Video from '../Images/BackgroundVideo.mp4'

const image = () => {
    return (
        <div>
            <div className='image-body'>
                <video className='img' controls={false} autoPlay muted loop>
                    <source src={Video} type="video/mp4" />
                </video>
            </div>
            <div className='image-text  bold'>
                <p>Technology Ecosystem for Smart Factories</p>
            </div>
            
        </div>
    );
};

export default image;