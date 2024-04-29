import './Blogs.css';

import React from 'react';
import BlogComponent from './BlogComponent';

const Blogs = () => {
    return (
        <div className='Blogs-body'>
            <p className='title'>Blogs & Articles</p>
            <div className='Blogs-description'>
                <BlogComponent/>
                <BlogComponent/>
                <BlogComponent/>
            </div>
            <button>Explore All</button>
        </div>
    );
};

export default Blogs;