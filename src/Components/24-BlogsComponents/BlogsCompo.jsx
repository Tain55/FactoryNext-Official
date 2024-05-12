import React from 'react';
import BlogCard from './BlogCard';
import './BlogsCompo.css';

const BlogsCompo = () => {
    return (
        <div className='BlogsCompo-body'>
            <div className='blogs-grid'>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
        </div>
    );
};

export default BlogsCompo;
