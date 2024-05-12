import './BlogComponent.css'
import React from 'react';
import image from '../Images/Blog Images/image 64.png'
import img from '../Images/Blog/image 111.png';
import profImg from '../Images/Blog/Avatar Image.png'
// import { TfiArrowTopRight } from "react-icons/tfi";
import { MdCallMade } from "react-icons/md";
import { Link } from 'react-router-dom';
import BlogDetailPage from '../../Pages/BlogDetailPage/BlogDetailPage';

const BlogComponent = () => {
    
    const backgroundImageStyle = {
        backgroundImage: `url(${img})`
    };
    return (
        <Link to={'/blogDetailPage' } style={{textDecoration:'none', color:'white'}}>
            <div className='BlogC-body'>
                <div className='BlogC-elements'>
                    <div className='blog-cart-image-home' style={backgroundImageStyle}></div>
                        <div className='blog-heading-home'><p>How to Achieve Productive Maintenance</p><MdCallMade className='blog-arrow'/></div>
                        <p className='blog-text-home'>Lorem ipsum dolor sit amet consectetur. Purus lobortis risus egestas enim cursus odio dui.</p>
                        <div className='blog-details-home'>
                            <div className='blog-profile'>
                                <div className='blog-prof-img'><img src={profImg} alt="" /></div>
                                <p>Hasibur Rahman</p>
                            </div>
                            <p className='blog-date'>Jan 23,2024</p>
                        </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogComponent;