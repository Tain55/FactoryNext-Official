import React from 'react';
import './Story.css'
import image1 from '../Images/About us/cement-plant-sunset 1.png'
import image2 from '../Images/About us/smoke-emitting-from-factory-against-sky-night (1) 1.png'


const Story = () => {
    return (
        <div className='StoryBody'>
            <div className='story-components'>
                <div className='story-heading'><p>Our Stroy</p></div>
                <div className='story p1'>
                    <p>Factory Next was founded in January 2021 by a small team of young reputed engineers,researchers and entrepreneurs as a collaboration innitiative by Arthor Limited, with a mission to revolutionize the industrial landscape of Bangladesh with next generation intelligent technologies.</p>
                </div>
                <div className='story-first-imageP'>
                    <p className='story p2'>Lack of reliable real-time data for effecient management and decision making has always been a big challange for many local factories in Bangladesh. Very few factories among big coprporations have adapted automation to certain extent, many of the big business groups and most small factories still rely on manual monitoring, supervision and data collection for their day to day management activities. This is one of the biggest barrier on the path of the 4th industrial revolution in local industries.</p>
                    <div>
                        <img src={image1} alt="" />
                    </div>
                </div>

                <div className='story-second-imageP'>
                    <div className='story-imge2'>
                        <img src={image2} alt="" />
                    </div>
                    <p className='story p3'>To break this barrier and drive the factories towards efficient data driven management, the “Factory Next Team” took the initiative to create a smart factory ecosystem that can deliver all the necessary tools and components required for transformation of a manual factory management system to a smart data driven factory management system. After months of dedicated research and development, Factory Next unveiled an advanced platform that seamlessly integrated cutting-edge sensors, analytics, and machine learning algorithms that provides real-time insights into factory operations, production process and environment, enabling owners and managers to make use of their data to find out the bottlenecks, optimize their process and improve effeciency up to 30-40%.</p>
                </div>
                
                <p className='story p4'>On December 10, 2021, we were awarded as one of the top 10 technology startups in Bangladesh by IDEA (Innovation, Development & Entrepreneurship Academy), Bangladesh, for our innovative production monitoring and analysis solution for local textile industries.</p>
                
                <p className='story-heading2'>Our Leaders</p>
                
            
            </div>
        </div>
    );
};

export default Story;