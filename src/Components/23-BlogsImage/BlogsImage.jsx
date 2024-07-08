import React from 'react';
import './BlogsImage.css'
import img from '../Images/Blog/image 108.png'
import { RiArrowDownDoubleFill } from "react-icons/ri";

const BlogsImage = () => {
    return (
        <>
            <div className='about-image' style={{ position: 'relative' }}>
                <div className='image-body' style={{
                    position: 'relative', 
                    overflow: 'hidden' 
                }}>
                    <div className='img-overlay' style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        // backgroundColor: 'linear-gradient(180deg, rgba(0, 0, 0, 0.81) 0%, rgba(0, 0, 0, 0.57) 45.25%, rgba(0, 0, 0, 0.45) 57%, rgba(0, 0, 0, 0.27) 100%)', // Red overlay with 50% opacity
                        // backgroundColor: '#2e2e2e50',
                        zIndex: 1 
                    }}>
                        <div className='blogBannerTexts'>
                            <div className='BLodtexts'>
                                <div className='blogBannerTextsA'>
                                    Blogs
                                </div>
                                <div className='blogBannerTextsB'>
                                    Leverage Expert Blogs to Empower Your Business Growth
                                </div>
                            </div>
                            <div className='scrolldown ScrollPositionBlog'>
                                <div className='scrollDownHeight'>
                                    <p>Scroll Down</p>
                                    <RiArrowDownDoubleFill className='scroll_icon'/>
                                </div>
                        </div>
                        </div>
                    </div>
                    <img className='img' src={img} alt=""/>
                </div>
            </div>
        </>
    );
};

export default BlogsImage;