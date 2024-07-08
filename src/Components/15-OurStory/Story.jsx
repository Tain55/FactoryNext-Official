import React from 'react';
import './Story.css'
import image1 from '../Images/About us/cement-plant-sunset 1.png'
import image2 from '../Images/About us/smoke-emitting-from-factory-against-sky-night (1) 1.png'
import titlei1 from '../Images/About us/Titles SVG/Group 50.svg'
import titlei2 from '../Images/About us/Titles SVG/Group 51.svg'
import titlei3 from '../Images/About us/Titles SVG/Group 52.svg'
import titlei4 from '../Images/About us/Titles SVG/Group 53.svg'


const Story = () => {
    return (
        <div className='StoryBody'>
            <div className='StoryWidth'>
                <div className='story-heading'><p>Our Story</p></div>
                <div className='StoryBody2'>
                    <div className='story-components'>
                        <div className='story p1'>
                            <p>Factory Next was founded in January 2021 by a small team of young reputed engineers,researchers and entrepreneurs as a collaboration innitiative by Arthor Limited, with a mission to revolutionize the industrial landscape of Bangladesh with next generation intelligent technologies.</p>
                        </div>
                        <div className='story-first-imageP'>
                            <p className='story p2'>Lack of reliable real-time data for effecient management and decision making has always been a big challange for many local factories in Bangladesh. Very few factories among big coprporations have adapted automation to certain extent, many of the big business groups and most small factories still rely on manual monitoring, supervision and data collection for their day to day.</p>
                            <div className='story-imge'>
                                <img src={image1} alt="" />
                            </div>
                        </div>
                        <div className='story-second-imageP'>
                            <div className='story-imge'>
                                <img src={image2} alt="" />
                            </div>
                            <p className='story p3'>Lack of reliable real-time data for effecient management and decision making has always been a big challange for many local factories in Bangladesh. Very few factories among big coprporations have adapted automation to certain extent, many of the big business groups and most small factories still rely on manual monitoring, supervision and data collection for their day to day.</p>
                        </div>
                        <p className='story p4'>On December 10, 2021, we were awarded as one of the top 10 technology startups in Bangladesh by IDEA (Innovation, Development & Entrepreneurship Academy), Bangladesh, for our innovative production monitoring and analysis solution for local textile industries.</p>
                    </div>
                    <div className='titels'>
                        <div className='titleDetails'>
                            <div className='ararow-top'>
                            </div>
                            <div className='titleDetails2'>
                                <div className='singleDetails'>
                                    <img src={titlei1} alt="" />
                                    <div className='singleDetailsText'>
                                    <p className='singleDetailsHeading'>Foundation and Early Development (September 2021 - December 2021)</p>
                                    <p className='singleDetailsParagraph'>Factory Next was established as a collaborative initiative by Arthor Limited with a small team of young engineers, researchers, and entrepreneurs. 
                                    </p>
                                    </div>
                                </div>
                                <div className='singleDetails'>
                                    <img src={titlei2} alt="" />
                                    <div className='singleDetailsText'>
                                    <p className='singleDetailsHeading'> Research and Development (September 2021 - March 2022)
                                    </p>
                                    <p className='singleDetailsParagraph'>The team engaged in extensive research and development to create a smart factory ecosystem. This phase involved developing and integrating cutting-edge sensors, analytics, and machine learning algorithms.
                                    </p>
                                    </div>
                                </div>
                                <div className='singleDetails'>
                                    <img src={titlei3} alt="" />
                                    <div className='singleDetailsText'>
                                    <p className='singleDetailsHeading'>Platform Unveiling and Initial Success (March 2022 - December 2022)
                                    </p>
                                    <p className='singleDetailsParagraph'>After months of dedicated R&D, Factory Next unveiled its advanced platform, which seamlessly integrated the developed technologies. </p>
                                    </div>
                                </div>
                                <div className='singleDetails'>
                                    <img src={titlei4} alt="" />
                                    <div className='singleDetailsText'>
                                    <p className='singleDetailsHeading'> Expansion and Continuous Improvement (January 2023 - Present)
                                    </p>
                                    <p className='singleDetailsParagraph'>Building on its initial success, Factory Next has continued to refine and expand its platform.

                                    </p>
                                    </div>
                                </div>
                            </div>
                            <div className='ararow-bottom'></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='StoryWidth2'>
                <div className='story-heading'><p>Our Story</p></div>
                
                <div className='story-components'>
                    <div className='story p1'>
                        <p>Factory Next was founded in January 2021 by a small team of young reputed engineers,researchers and entrepreneurs as a collaboration innitiative by Arthor Limited, with a mission to revolutionize the industrial landscape of Bangladesh with next generation intelligent technologies.</p>
                    </div>

                    <div className='titels'>
                    <div className='titleDetails'>
                        <div className='ararow-top'>
                        </div>
                        <div className='titleDetails2'>
                            <div className='singleDetails'>
                                <img src={titlei1} alt="" />
                                <div className='singleDetailsText'>
                                    <p className='singleDetailsHeading'>Foundation and Early Development (September 2021 - December 2021)</p>
                                    <p className='singleDetailsParagraph'>Factory Next was established as a collaborative initiative by Arthor Limited with a small team of young engineers, researchers, and entrepreneurs. The primary mission was to revolutionize the industrial landscape of Bangladesh using next-generation intelligent technologies. The team focused on addressing the lack of reliable real-time data in local factories, which posed a significant challenge for efficient management and decision-making.
                                    </p>
                                </div>
                            </div>
                            <div className='singleDetails'>
                                <img src={titlei2} alt="" />
                                <div className='singleDetailsText'>
                                    <p className='singleDetailsHeading'> Research and Development (September 2021 - March 2022)
                                    </p>
                                    <p className='singleDetailsParagraph'>The team engaged in extensive research and development to create a smart factory ecosystem. This phase involved developing and integrating cutting-edge sensors, analytics, and machine learning algorithms. The goal was to provide real-time insights into factory operations, production processes, and environments, enabling factory owners and managers to identify bottlenecks, optimize processes, and improve efficiency by 30-40%.
                                    </p>
                                </div>
                            </div>
                            <div className='singleDetails'>
                                <img src={titlei3} alt="" />
                                <div className='singleDetailsText'>
                                    <p className='singleDetailsHeading'>Platform Unveiling and Initial Success (March 2022 - December 2022)
                                    </p>
                                    <p className='singleDetailsParagraph'>After months of dedicated R&D, Factory Next unveiled its advanced platform, which seamlessly integrated the developed technologies. The platform received positive feedback for its innovative approach to transforming manual factory management systems into smart, data-driven ones. On December 10, 2021, Factory Next was recognized as one of the top 10 technology startups in Bangladesh by IDEA (Innovation, Development & Entrepreneurship Academy) for its innovative production monitoring and analysis solution for local textile industries.
                                    </p>
                                </div>
                            </div>
                            <div className='singleDetails'>
                                <img src={titlei4} alt="" />
                                <div className='singleDetailsText'>
                                    <p className='singleDetailsHeading'> Expansion and Continuous Improvement (January 2023 - Present)
                                    </p>
                                    <p className='singleDetailsParagraph'>Building on its initial success, Factory Next has continued to refine and expand its platform. This phase involves onboarding more factories, enhancing the technology with continuous updates, and exploring new industrial applications. The focus remains on driving the adoption of intelligent technologies across more factories in Bangladesh, aiming to further increase efficiency and promote the 4th industrial revolution in local industries.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='ararow-bottom'></div>
                    </div>
                </div>
                    
                <p className='story p2'>Lack of reliable real-time data for effecient management and decision making has always been a big challange for many local factories in Bangladesh. Very few factories among big coprporations have adapted automation to certain extent, many of the big business groups and most small factories still rely on manual monitoring, supervision and data collection for their day to day.</p>
                    
                <div className='story-imge'>
                    <img src={image1} alt="" />
                </div>
                
                <p className='story p3'>Lack of reliable real-time data for effecient management and decision making has always been a big challange for many local factories in Bangladesh. Very few factories among big coprporations have adapted automation to certain extent, many of the big business groups and most small factories still rely on manual monitoring, supervision and data collection for their day to day.</p>
                <div className='story-imge'>
                    <img src={image2} alt="" />
                </div>
                <p className='story p4'>On December 10, 2021, we were awarded as one of the top 10 technology startups in Bangladesh by IDEA (Innovation, Development & Entrepreneurship Academy), Bangladesh, for our innovative production monitoring and analysis solution for local textile industries.</p>
            </div>
                    
                
            </div>
            
        </div>
    );
};

export default Story;