import './BlogComponent.css'
import React from 'react';
import image from '../Images/Blog Images/image 64.png'
import img from '../Images/Blog/b2.jpg';
import profImg from '../Images/Blog/Avatar Image.png'
// import { TfiArrowTopRight } from "react-icons/tfi";
import { MdCallMade } from "react-icons/md";
import { Link } from 'react-router-dom';
import BlogDetailPage2 from '../../Pages/BlogDetailPage/BlogDetailPage2';

const BlogComponent2 = () => {
    
    const backgroundImageStyle = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center', // Centers the image
        backgroundSize: 'cover', // Ensures the image covers the element
        backgroundRepeat: 'no-repeat'
    };
    return (
        <Link to={'/blogDetailPage2' } style={{textDecoration:'none', color:'white'}}>
            <div className='BlogC-body'>
                <div className='BlogC-elements'>
                    <div className='blog-cart-image-home' style={backgroundImageStyle}></div>
                        <div className='blog-heading-home'><p>Transforming Air Quality Management
                        </p><MdCallMade className='blog-arrow'/></div>
                        <p className='blog-text-home'>"Factory Next is proud to announce a strategic partnership with Index Group... </p>
                        <div className='blog-details-home'>
                            <div className='blog-profile'>
                                <div className='blog-prof-img'><img src={profImg} alt="" /></div>
                                <p>Insan Arafat Jamil</p>
                            </div>
                            <p className='blog-date'>Dec 12,2024</p>
                        </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogComponent2;