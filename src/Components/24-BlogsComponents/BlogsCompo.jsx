import React from 'react';
import BlogCard from './BlogCard';
import './BlogsCompo.css';
import b1 from '../Images/Blog/b1.png'
import b2 from '../Images/Blog/b2.jpg'
const BlogsCompo = () => {
    return (
        <div className='BlogsCompo-body'>
            <div className='blogs-grid'>
                <BlogCard id={''} title='প্রেডিক্টিভ মেইন্টেনেন্স' desc='"প্রেডিক্টিভ মেইন্টেনেন্স” হল এমন একটি প্রযুক্তি, যা আগে থেকেই ফ্যাক্টরিতে কোন ধরনের সমস্যার কথা অনুমান করে কখন, কোথায় সমস্যা হতে পারে সে ব্যাপারে আপনাকে সতর্ক করবে...' date='Jan 23, 2024' image={b1}/>
                <BlogCard id={2} title='Transforming Air Quality Management' desc='"Factory Next is proud to announce a strategic partnership with Index Group, a pioneer in promoting sustainable industrial practices in Bangladesh...' date='Dec 12, 2024' image={b2}/>
                {/* <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/> */}
            </div>
        </div>
    );
};

export default BlogsCompo;
