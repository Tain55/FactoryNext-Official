import './Solutions.css';
import img1 from '../Images/solution images/image1.png'
import img2 from '../Images/solution images/image2.png'
import img3 from '../Images/solution images/image3.png'
import img4 from '../Images/solution images/image 82.png'
import img5 from '../Images/solution images/image 83.png'

import image1 from '../Images/Solution-mobile-icons/sol-icon-1.png'
import image2 from '../Images/Solution-mobile-icons/sol-icon-2.png'
import image3 from '../Images/Solution-mobile-icons/sol-icon-3.png'
import image4 from '../Images/Solution-mobile-icons/sol-icon-4.png'
import image5 from '../Images/Solution-mobile-icons/sol-icon-5.png'

import bigimg1 from '../Images/Our Soluitions new/1.png'
import bigimg2 from '../Images/Our Soluitions new/2.png'
import bigimg3 from '../Images/Our Soluitions new/3.png'
import bigimg4 from '../Images/Our Soluitions new/4.png'
import bigimg5 from '../Images/Our Soluitions new/5.png'
import line1 from '../Images/Our Soluitions new/Vector.png'
import line2 from '../Images/Our Soluitions new/Vector-1.png'
import line3 from '../Images/Our Soluitions new/Vector-2.png'
import line4 from '../Images/Our Soluitions new/Vector-3.png'
import line5 from '../Images/Our Soluitions new/Vector-4.png'
import bigCircle from '../Images/Our Soluitions new/Title.png'

// import solutionImage from '../Images/solution images/Our_Solutions.png'
import solutionImage from '../Images/solution images/Objects.png'
import { Link } from 'react-router-dom';


const Solutions = () => {
    return (
        <div className='solution-1'>
            <div className='solution-2'>
                <p className='title modifySmart'>Smart Factory Solutions</p>
                <div className='solution-contents'>
                    <div className='bigcircle'><img src={bigCircle} alt="" /></div>
                    <div className='the5images'>
                        <img className='bigimages imagePart1' src={bigimg1} alt="" />
                        <img className='bigimages2 imagePart2' src={bigimg2} alt="" />
                        <img className='bigimages3 imagePart3' src={bigimg3} alt="" />
                        <img className='bigimages2 imagePart4' src={bigimg4} alt="" />
                        <img className='bigimages imagePart5' src={bigimg5} alt="" />
                    </div>
                </div>



                {/* <div className='solution-contents'>
                    <div className='solution-boxes'>
                        <div className='image SModify'>
                            <img src={img1} alt="" />
                        </div>
                        <p className='solution-des'>Machine and Process Monitoring</p>
                    </div>
                    <div className='solution-boxes'>
                        <div className='image SModify'>
                            <img src={img2} alt="" />
                        </div>
                        <p className='solution-des'>Environment Monitoring</p>
                    </div>
                    <div className='solution-boxes'>
                        <div className='image SModify'>
                            <img src={img3} alt="" />
                        </div>
                        <p className='solution-des'>Energy & Utility Monitoring</p>
                    </div>
                </div>
                <div className='solution-contents-2'>
                    <div className='solution-boxes'>
                        <div className='image SModify'>
                            <img src={img4} alt="" />
                        </div>
                        <p className='solution-des'>AI Features</p>
                    </div>
                    <div className='solution-boxes'>
                        <div className='image SModify'>
                            <img src={img5} alt="" />
                        </div>
                        <p className='solution-des'>IR Transformation Design & Consultancy</p>
                    </div>
                </div> */}
                <div className='solutionLines'>
                    <div className='SLine line1'><img src={line3} alt="" /></div>
                    <div className='SLine line2'><img src={line1} alt="" /></div>
                    <div className='SLine line3'><img src={line5} alt="" /></div>
                    <div className='SLine line4'><img src={line2} alt="" /></div>     
                    <div className='SLine line5'><img src={line4} alt="" /></div>
                </div>


                <div className='Solution-Design-Image'>


                    {/* <div className='Solution-Image'>
                       <img src={solutionImage} alt="" />
                    </div> */}

                    <div className='Solution-Details-1'>
                        <div className='Solution-text1'>
                            <p className='Solution-heading'>Machine and Process Monitoring</p>
                            <p className='Solution-details'>Real-time tracking and analytics for equipment and processes to enhance efficiency.</p>
                        </div>
                        <div className='Solution-text2'>
                            <p className='Solution-heading'>4IR Transformation Design & Consultancy</p>
                            <p className='Solution-details'>Strategic consultancy for integrating Industry 4.0 technologies into business operations.</p>
                        </div>
                    </div>
                    <div className='Solution-Details-2'>
                        <div className='Solution-text3'>
                            <p className='Solution-heading'>Environment Monitoring</p>
                            <p className='Solution-details'>Continuous assessment of environmental conditions to ensure regulatory compliance.</p>
                        </div>
                        
                        <div className='Solution-text4'>
                            <p className='Solution-heading'>AI Features</p>
                            <p className='Solution-details'>Advanced AI technologies for predictive maintenance, optimization, and energy management.</p>
                        </div>
                    </div>

                    <div className='Solution-text5 '>
                        <p className='Solution-heading'>Energy & Utility Monitoring</p>
                        <p className='Solution-details'>Optimization of energy use and utility management for cost and resource savings.</p>
                    </div>
                </div>

                <div className='solution-mobile-view'>
                    <p className='our-solution-heading'>Our Solutions</p>
                    <div className='solutoin-mobile-cards'>
                        <div className='solution-mobile-row'>
                            <Link style={{textDecoration: 'none'}}>
                                <div className='solution-mobile'>
                                    <div className='headingAndIcon'>
                                        <div className='solution-mobile-image'><img src={image1} alt="" /></div>
                                        <p className='solution-mobile-heading'>Machine and Process Monitoring</p>
                                    </div>
                                    <p className='solution-mobile-text'>Real-time tracking and analytics for equipment and processes to enhance efficiency.</p>
                                </div>
                            </Link>
                            <Link style={{textDecoration: 'none'}}>
                                <div className='solution-mobile '>
                                    <div className='headingAndIcon'>
                                        <div className='solution-mobile-image'><img src={image2} alt="" /></div>
                                        <p className='solution-mobile-heading'>Environment Monitoring</p>
                                    </div>
                                    <p className='solution-mobile-text'>Continuous assessment of environmental conditions to ensure regulatory compliance.</p>
                                </div>
                            </Link>
                            <Link style={{textDecoration: 'none'}}>
                                <div className='solution-mobile '>
                                    <div className='headingAndIcon'>
                                        <div className='solution-mobile-image'>
                                            <img src={image3} alt="" />
                                        </div>
                                        <p className='solution-mobile-heading'>Energy & Utility Monitoring</p>
                                    </div>
                                    
                                    <p className='solution-mobile-text'>Optimization of energy use and utility management for cost and resource savings.</p>
                                </div>
                            </Link>
                            <Link style={{textDecoration: 'none'}}>
                                <div className='solution-mobile '>
                                    <div className='headingAndIcon'>
                                        <div className='solution-mobile-image'>
                                            <img src={image4} alt="" />
                                        </div>
                                        <p className='solution-mobile-heading'>AI Features</p>
                                    </div>
                                    <p className='solution-mobile-text'>Advanced AI technologies for predictive maintenance, optimization, and energy management.</p>
                                </div>
                            </Link>
                            <Link style={{textDecoration: 'none'}}>
                            <div className='solution-mobile '>
                                <div className='headingAndIcon'>
                                    <div className='solution-mobile-image'><img src={image5} alt="" /></div>
                                    <p className='solution-mobile-heading'>4IR Transformation Design & Consultancy</p>
                                </div>
                            
                                <p className='solution-mobile-text'>Strategic consultancy for integrating Industry 4.0 technologies into business operations.</p>
                            </div>
                            </Link>
                        </div>
                        <div className='solution-mobile-row'>
                            
                        </div>

                        <div className='solution-mobile-row'>
                            
                            <div className='solution-mobile-new'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;