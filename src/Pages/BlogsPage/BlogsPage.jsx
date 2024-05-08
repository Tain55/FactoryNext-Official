import React from 'react';
import './BlogsPage.css'
import BlogsImage from './../../Components/23-BlogsImage/BlogsImage';
import BlogComponent from './../../Components/11-Blogs/BlogComponent';
import NavigationBar from './../../Components/1-NavigationBar/NavigationBar';
import Footer from './../../Components/14-Footer/Footer';

const BlogsPage = () => {
    return (
        <div className='homepage'>
            <NavigationBar/>
            <BlogsImage/>
            <BlogComponent/>
            <Footer/>
        </div>
    );
};

export default BlogsPage;   <p>asdf</p>