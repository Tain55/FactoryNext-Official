import React from 'react';
import './BlogsImage.css'
import img from '../Images/Blog/image 108.png'

const BlogsImage = () => {
    return (
        <>
            <div className='BlogsImageBody'>
                <img src={img} alt="" />
            </div>
            <div className='blogBannerTexts'>
                <div className='blogBannerTextsA'>
                    Blogs
                </div>
                <div className='blogBannerTextsB'>
                    Leverage Expert Blogs to Empower Your Business Growth
                </div>
            </div>
        </>
    );
};

export default BlogsImage;