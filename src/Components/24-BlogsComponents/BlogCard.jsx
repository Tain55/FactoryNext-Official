import React from 'react';
import './BlogCard.css'
import img from '../Images/Blog/image 111.png';
import profImg from '../Images/Blog/Avatar Image.png'
// import { TfiArrowTopRight } from "react-icons/tfi";
import { MdCallMade } from "react-icons/md";
import { Link } from 'react-router-dom';
import BlogDetailPage from '../../Pages/BlogDetailPage/BlogDetailPage';

const BlogCard = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${img})`
    };
    return (
        <>
            <Link to={'/blogDetailPage'} style={{textDecoration:'none', color: '#231F20'}}>
                <div className='blog-card-body'>
                    <div className='blog-cart-image' style={backgroundImageStyle}></div>
                    <div className='blog-heading'><p>How to Achieve Productive Maintenance</p><MdCallMade className='blog-arrow'/></div>
                    <p className='blog-text'>Lorem ipsum dolor sit amet consectetur. Purus lobortis risus egestas enim cursus odio dui.</p>
                    <div className='blog-details'>
                        <div className='blog-profile'>
                            <div className='blog-prof-img'><img src={profImg} alt="" /></div>
                            <p>Hasibur Rahman</p>
                        </div>
                        <p className='blog-date'>Jan 23,2024</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default BlogCard;