import React from 'react';
import './BlogsPage.css'
import BlogsImage from './../../Components/23-BlogsImage/BlogsImage';
import NavigationBar from './../../Components/1-NavigationBar/NavigationBar';
import Footer from './../../Components/14-Footer/Footer';
import BlogsCompo from './../../Components/24-BlogsComponents/BlogsCompo';

const BlogsPage = () => {
    return (
        <div className='homepage'>
            <NavigationBar/>
            <BlogsImage/>
            <BlogsCompo/>
            <Footer/>
        </div>
    );
};

export default BlogsPage;   <p>asdf</p>