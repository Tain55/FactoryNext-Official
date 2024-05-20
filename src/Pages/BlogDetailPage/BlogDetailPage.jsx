import React from 'react';
import './BlogDetailPage.css';
import NavigationBar from './../../Components/1-NavigationBar/NavigationBar';
import Footer from '../../Components/14-Footer/Footer';
import img from '../../Components/Images/Blog/individual.png'
import img2 from '../../Components/Images/Blog/Avatar Image.png'

import image from '../../Components/Images/Blog/b111.png'
import { FaRegThumbsUp } from "react-icons/fa6";
import { MdOutlineInsertComment } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";
import NavigationBar2 from '../../Components/NavigationBar-2/NavigationBar2';

const BlogDetailPage = () => {
    return (
        <div className='homepage'>
            <NavigationBar2/>
            <div className='bolg-details'>
                <div className='blog-details-top'>
                    <div className='blog-detail-top-left'><div><img src={img2} alt="" /></div><p>Insan Arafat Jamil</p></div>
                    <p className='blog-details-date'>4 min read • Jan 23, 2024</p>
                </div>
                <div className='blog-details-image'>
                    <img src={image} alt="" />
                </div>
                <div className='blog-details-heading'>
                    <p>প্রেডিক্টিভ মেইন্টেনেন্স</p>
                </div>
                <div className='blog-details-description'>
                    <p>
                    "প্রেডিক্টিভ মেইন্টেনেন্স” হল এমন একটি প্রযুক্তি, যা আগে থেকেই ফ্যাক্টরিতে কোন ধরনের সমস্যার কথা অনুমান করে কখন, কোথায় সমস্যা হতে পারে সে ব্যাপারে আপনাকে সতর্ক করবে, আর তার জন্য কি ধরনের ব্যবস্থা নেয়া উচিত, তার ব্যাপারে নির্দেশনা দিবে। জটিল মেশিনারি রক্ষণাবেক্ষণে কখন কি ধরনের যন্ত্রাংশ লাগতে পারে সে ব্যাপারেও ধারনা দিয়ে এটি আপনাকে অপ্রয়োজনীয় ঝামেলা ও খরচ থেকে মুক্তি দিবে।

                    <br />
<br />
চতুর্থ শিল্পবিপ্লব শিল্পক্ষেত্রে যে অসাধারণ সম্ভাবনার দ্বার উন্মুক্ত করেছে, তার একটি বড় উদাহরণ “প্রেডিক্টিভ মেইন্টেনেন্স”। একদিকে এটি যেমন ফ্যাক্টরির জটিল ও ব্যায়বহুল মেশিনারির রক্ষণাবেক্ষণকে সহজ ও সাশ্রয়ী করতে সাহায্য করে, একই সাথে প্রসেস বা অপারেশনের সূক্ষ্মতম অসংগতিও চিহ্নিত করে সর্বোচ্চ উৎপাদনশীলতা নিশ্চিত করতে সাহায্য করে। এ প্রযুক্তির ব্যাবহার আপনার ফ্যাক্টরির ডাউন টাইম ৩৫% – ৪০ % পর্যন্ত কমিয়ে আনতে পারে। অপ্রত্যাশিত ব্রেকডাউন প্রায় ৭০% – ৭৫ % কমিয়ে এটি আপনার রিটার্ন অফ ইনভেস্টমেন্ট প্রায় দশ গুন পর্যন্ত বাড়াতে সাহায্য করতে পারে।
<br />
<br />
<b>কি ভাবে কাজ করে?</b>
<br />
<br />
একটি ফ্যাক্টরি বা প্রতিষ্ঠানের প্রধানত তিনটি বিষয় <b>“প্রেডিক্টিভ মেইন্টেনেন্স”</b> ব্যবস্থার মূল প্রভাবক হিসেবে কাজ করে।
<br />
<br />
<tab>
&nbsp;&nbsp;&nbsp;&nbsp;১। মেশিন ও বিভিন্ন এসেটের কন্ডিশন ও পারফরমেন্সের রিয়েল টাইম মনিটরিং ও তথ্য সংরক্ষন<br /></tab>

&nbsp;&nbsp;&nbsp;&nbsp;২। ওয়ার্ক অর্ডার ও ওয়ার্ক ফ্লো সম্পর্কিত ডাটা বিশ্লেষণ<br />

&nbsp;&nbsp;&nbsp;&nbsp;৩। “এম. আর. ও. ইনভেন্টরি” ব্যবহার সম্পর্কিত তথ্য বিশ্লেষণ ও মাপকাঠি নির্ধারণ<br />
<br />

( “এম. আর. ও. ইনভেন্টরি” হল সেইসব ম্যাটেরিয়াল, যন্ত্রাংশ ও সাপ্লাইয়ের ইনভেন্টরি, যা সাধারণত ফ্যাক্টরির বিভিন্ন রক্ষণাবেক্ষণ, রিপেয়ার ও অপারেশনের কাজে ব্যাবহার করা হয়। )<br />
<br />
একটি মেশিনকে প্রেডিক্টিভ মেইন্টেনেন্সের আওতায় আনার জন্য সাধারণত কম্পন, তাপমাত্রা, অয়েল অ্যানালাইসিস, থারমাল ইমেজিং ইত্যাদি বিভিন্ন বিষয় পর্যবেক্ষণ করা হয়। অপারেশন ও মেশিন সংক্রান্ত এসব সংরক্ষিত তথ্য-উপাত্ত ও রিয়েল টাইম তথ্য বিশ্লেষণ করে একটি আধুনিক সফটওয়্যার কৃত্তিম বুদ্ধিমত্তা প্রযুক্তির সাহায্যে আগে থেকেই বুঝে ফেলে,কোথায় কি ধরনের সমস্যা তৈরি হতে পারে, আর তার জন্য কি ধরনের ব্যবস্থা নেয়া উচিৎ।<br />
<br />
অসাধারণ এ প্রযুক্তির সুফল পেতে প্রথমেই যা প্রয়োজন, তা হল বিভিন্ন সেন্সর, আই. ও. টি. (ইন্টারনেট অফ থিংস) এনাবলড ইন্টিগ্রেটেড সিস্টেম, সফটওয়্যার ও কৃত্তিম বুদ্ধিমত্তা সমন্বয়ে একটি “কানেক্টেড ফ্যাক্টরি” ব্যবস্থা গড়ে তোলা, যেখানে সবধরনের মেশিন, প্রসেস ও অপারেশন একটি কমন প্লাটফরমে যুক্ত থাকে ও একে অপরের সাথে যোগাযোগ করতে পারে। ফ্যাক্টরির ও মেশিনের ধরন, প্রয়োজনীয়তা বুঝে একজন বিশেষজ্ঞ ইঞ্জিনিয়ার বা ইঞ্জিনিয়ারদের একটি টিম এর প্রায়োগিক বিষয় গুলো ঠিক করেন।<br />
<br />
<b>কোথায়, কখন ও কেন প্রেডিক্টিভ মেইন্টেনেন্স ব্যাবহার করা উচিৎ?</b><br />
<br />
রক্ষণাবেক্ষণ বা মেইন্টেনেন্সের জন্য ইন্ডাস্ট্রিতে তিন ধরনের ব্যবস্থা প্রচলিত আছে। সবচেয়ে প্রচলিত ব্যবস্থা হল রিয়্যাক্টিভ মেইন্টেনেন্স। অর্থাৎ কিছু নস্ট হওয়ার পর তা ঠিক করার ব্যবস্থা করা। একটা বাল্ব নস্ট হয়ে গেলে আমরা সেটাকে বদলে দেই, এটা একটা রিয়্যাক্টিভ মেইন্টেনেন্সের উদাহরণ।<br />
<br />
বিভিন্ন জটিল ও ব্যায়বহুল মেশিনের রক্ষণাবেক্ষণে সাধারণত প্রিভেন্টিভ মেইনেনেন্স ব্যাবহার করা হয়। এধরনের মেশিনের ক্ষেত্রে কোন ব্রেকডাউন বা ফেইল হলে তার রক্ষণাবেক্ষণ ও ঠিক করার ব্যপারটা সাধারণত বেশ ব্যাবহুল ও সময় সাপেক্ষ হয়। এর থেকে বাচার জন্য তাই মেশিন ও ইকুইপমেন্ট গুলো নিয়মিত চেকিং ও মেইন্টেনেন্স করা হয়। উদাহরণ হিসেবে কোন পাওয়ার প্ল্যান্ট এর টারবাইন, কমপ্লেক্স কোন ইঞ্জিন বা টেক্সটাইল ফ্যাক্টরিতে ব্যবহৃত ব্যায়বহুল অটমেটিক মেশিনের কথা বলা যায়।<br />
<br />
প্রিভেন্টিভ মেইনেনেন্সের সবচেয়ে বড় চ্যালেঞ্জ হল, কখন মেইন্টেনেন্স করতে হবে তা ঠিক করা। অতিরিক্ত মেইন্টেনেন্স করতে গেলে মেশিনের আয়ু ও দক্ষতা কমতে শুরু করে। দিন শেষে যা যোগ হয় অতিরিক্ত খরচের খাতায়। এই চ্যলেঞ্জ অতিক্রম করতে সাহায্য করে প্রেডিক্টিভ মেইন্টেনেন্স। কখন, কোথায় কিধরনের সমস্যা হতে পারে তা আগে থেকে জানিয়ে দেয়ায় এতে মেইন্টেনেন্স এর জন্য প্রয়োজনীয় সময় ও ব্যয় অনেক কমে আসে। মেইন্টেনেন্স চলাকালীন ডাউন টাইম ও প্রোডাকশন লস, দরকারি স্পেয়ার পার্টস বা সাপ্লাইয়ের পরিমাণ কমিয়ে এনে এটি দীর্ঘ মেয়াদে প্রতিষ্ঠানকে লাভজনক করে তুলতে সাহায্য করে।<br />
<br />
আই বি এম, মাইক্রোসফট, টেসলা, টয়োটা, জেনারেল ইলেক্ট্রিক সহ বিশ্বের বড় বড় নামকরা প্রতিষ্ঠানগুলো ইতিমধ্যেই তাদের ব্যাবহুল প্রযুক্তি ও মেশিনারি সংরক্ষনে এ প্রযুক্তির ব্যাবহার করছে। কিভাবে এ প্রযুক্তিকে আরও উন্নত করে তোলা যায়, তা নিয়ে চলছে বিস্তর গবেষণা। আমাদের দেশি শিল্প-প্রতিষ্ঠানগুলোতেও এর অপার সম্ভাবনা রয়েছে। চতুর্থ শিল্প বিল্পব নিয়ে সচেতনতা, উদ্যোগ ও স্মার্ট ফ্যাক্টরি ব্যবস্থা গড়ে তুলতে প্রয়োজনীয় বিনিয়োগ আমাদের দেশের বিভিন্ন শিল্পখাতকে আরও লাভজনক করে তুলতে সাহায্য করবে। একই সাথে বিশ্ব বাজারে আমাদের অবস্থানকে আরও শক্ত করে অনেক দূর এগিয়ে নিতে সাহায্য করবে।<br />
<br />
<b>– ইনসান আরাফাত জামিল, প্রধান নির্বাহী কর্মকর্তা , ফ্যাক্টরি নেক্সট</b>
                    </p>
                </div>
                <div className='blog-details-like-comment'>
                    <div className='blog-details-like'><FaRegThumbsUp className='blog-details-icons'/> <p>Like</p></div>
                    <div className='blog-details-comment'><MdOutlineInsertComment className='blog-details-icons'/> <p>Comment</p></div>
                    <div className='blog-details-share'><RiShareForwardLine className='blog-details-icons'/> <p>Share</p></div>
                </div>
                <div className='blog-details-add-comment'>
                    <div className='blogdetail-comment-image'><img src={img} alt="" /></div>
                    <input type="text" placeholder='Add a comment...' className='blog-detail-commentBox'/>
                </div>
                <div className='blog-details-show-comment'>
                    <div><img src={img} alt="" /></div>
                    <div className='blog-detail-comment'>
                        <div className='blog-detail-comment-name'><p>Raisa Rajin</p> <RxDotFilled />  <FaRegThumbsUp className='thumbsup'/> </div>
                        <p className='blog-detail-comment-detail'>A at congue felis orci lacus nisi sed. Senectus neque commodo iaculis sed vivamus</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default BlogDetailPage;