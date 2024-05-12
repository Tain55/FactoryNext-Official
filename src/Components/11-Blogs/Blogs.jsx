import './Blogs.css';

import React from 'react';
import BlogComponent from './BlogComponent';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className='Blogs-body'>
            <p className='title'>Blogs & Articles</p>
            <div className='blogLarge'>
            <div className='Blogs-description '>
                <BlogComponent/>
                <BlogComponent/>
                <BlogComponent/>
            </div>
            </div>
            <div className='blogMedium'>
            <div className='Blogs-description '>
                <BlogComponent/>
                <BlogComponent/>
            </div>
            </div>
            <div className='blogSmall'>
            <div className='Blogs-description '>
                <BlogComponent/>
            </div>
            </div>
            <Link to={'/blogs'}><button>Explore All</button></Link>
        </div>
    );
};

export default Blogs;