import React from 'react';
import './BlogCard.css'
import img from '../Images/Blog/image 111.png';
import profImg from '../Images/Blog/Avatar Image.png'
// import { TfiArrowTopRight } from "react-icons/tfi";
import { MdCallMade } from "react-icons/md";
import { Link } from 'react-router-dom';

const BlogCard = ({id, title, desc, date, image}) => {
    const backgroundImageStyle = {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center', // Centers the image
        backgroundSize: 'cover', // Ensures the image covers the element
        backgroundRepeat: 'no-repeat'
    };
    return (
        <>
            <Link to={`/blogDetailPage${id}`} style={{textDecoration:'none', color: '#231F20'}}>
                <div className='blog-card-body'>
                    <div className='blog-cart-image' style={backgroundImageStyle}></div>
                    <div className='blog-heading'><p>{title}</p><MdCallMade className='blog-arrow'/></div>
                    <p className='blog-text'>{desc}</p>
                    <div className='blog-details'>
                        <div className='blog-profile'>
                            <div className='blog-prof-img'><img src={profImg} alt="" /></div>
                            <p>Insan Arafat Jamil</p>
                        </div>
                        <p className='blog-date'>{date}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default BlogCard;