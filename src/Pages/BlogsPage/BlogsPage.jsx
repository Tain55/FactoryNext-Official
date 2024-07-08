import React from 'react';
import './BlogsPage.css'
import BlogsImage from './../../Components/23-BlogsImage/BlogsImage';
import NavigationBar from './../../Components/1-NavigationBar/NavigationBar';
import Footer from './../../Components/14-Footer/Footer';
import BlogsCompo from './../../Components/24-BlogsComponents/BlogsCompo';
import NavigationBar2 from '../../Components/NavigationBar-2/NavigationBar2';

const BlogsPage = () => {
    return (
        <div className='homepage'>
            <NavigationBar/>
            <BlogsImage/>
            <div style={{margin: window.innerWidth>'746px' ? '1000px': '50px'}}></div>
            <BlogsCompo/>
            <Footer/>
        </div>
    );
};

export default BlogsPage;   <p>asdf</p>