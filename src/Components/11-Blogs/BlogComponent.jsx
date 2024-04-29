import './BlogComponent.css'
import React from 'react';
import image from '../Images/Blog Images/image 64.png'

const BlogComponent = () => {
    return (
        <div className='BlogC-body'>
            <div className='BlogC-elements'>
                <div className='BlogC-image'><img src={image} alt="" /></div>
                <p className='BlogC-title'>title</p>
            </div>
        </div>
    );
};

export default BlogComponent;