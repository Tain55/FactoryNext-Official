import React from 'react';
import './BlogsImage.css'
import img from '../Images/Blog/image 108.png'

const BlogsImage = () => {
    return (
        <div className='BlogsImageBody'>
            <img src={img} alt="" />
        </div>
    );
};

export default BlogsImage;