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

import solutionImage from '../Images/solution images/Our_Solutions.png'
// import solutionImage from '../Images/solution images/Objects.png'


const Solutions = () => {
    return (
        <div className='solution-1'>
            <div className='solution-2'>
                <p className='title modifySmart'>Smart Factory Solutions</p>
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


                <div className='Solution-Design-Image'>
                    <div className='Solution-Image'>
                       <img src={solutionImage} alt="" />
                    </div>
                    {/* <div className='Solution-text1'>
                        <p className='Solution-heading'>Machine and Process Monitoring</p>
                        <p className='Solution-details'>Lorem ipsum dolor sit amet consectetur. Id enim tristique pretium aliquet donec lorem amet. </p>
                    </div>
                    <div className='Solution-text2'>
                        <p className='Solution-heading'>Environment Monitoring</p>
                        <p className='Solution-details'>Lorem ipsum dolor sit amet consectetur. Id enim tristique pretium aliquet donec lorem amet. </p>
                    </div>
                    <div className='Solution-text3'>
                        <p className='Solution-heading'>Energy & Utility Monitoring</p>
                        <p className='Solution-details'>Lorem ipsum dolor sit amet consectetur. Id enim tristique pretium aliquet donec lorem amet. </p>
                    </div>
                    <div className='Solution-text4'>
                        <p className='Solution-heading'>AI Features</p>
                        <p className='Solution-details'>Lorem ipsum dolor sit amet consectetur. Id enim tristique pretium aliquet donec lorem amet. </p>
                    </div>
                    <div className='Solution-text5'>
                        <p className='Solution-heading'>IR Transformation Design & Consultancy</p>
                        <p className='Solution-details'>Lorem ipsum dolor sit amet consectetur. Id enim tristique pretium aliquet donec lorem amet. </p>
                    </div> */}
                </div>

                <div className='solution-mobile-view'>
                    <p className='our-solution-heading'>Our Solutions</p>
                    <div className='solutoin-mobile-cards'>
                        <div className='solution-mobile-row'>
                            <div className='solution-mobile'>
                                <div className='solution-mobile-image'><img src={image1} alt="" /></div>
                                <p className='solution-mobile-heading'>Machine and Process Monitoring</p>
                                <p className='solution-mobile-text'>Lorem ipsum dolor sit amet consectetur. Id enim tristique pretium aliquet donec lorem amet. Velit penatibus sit volutpat lobortis porta.</p>
                            </div>
                            <div className='solution-mobile '>
                                <div className='solution-mobile-image'><img src={image2} alt="" /></div>
                                <p className='solution-mobile-heading'>Environment Monitoring</p>
                                <p className='solution-mobile-text'>Lorem ipsum dolor sit amet consectetur. Id enim tristique pretium aliquet donec lorem amet. Velit penatibus sit volutpat lobortis porta.</p>
                            </div>
                        </div>
                        <div className='solution-mobile-row'>
                            <div className='solution-mobile '>
                                <div className='solution-mobile-image'><img src={image3} alt="" /></div>
                                <p className='solution-mobile-heading'>Energy & Utility Monitoring</p>
                                <p className='solution-mobile-text'>Lorem ipsum dolor sit amet consectetur. Id enim tristique pretium aliquet donec lorem amet. Velit penatibus sit volutpat lobortis porta.</p>
                            </div>
                            <div className='solution-mobile '>
                                <div className='solution-mobile-image'><img src={image4} alt="" /></div>
                                <p className='solution-mobile-heading'>AI Features</p>
                                <p className='solution-mobile-text'>Lorem ipsum dolor sit amet consectetur. Id enim tristique pretium aliquet donec lorem amet. Velit penatibus sit volutpat lobortis porta.</p>
                            </div>
                        </div>

                        <div className='solution-mobile-row'>
                            <div className='solution-mobile '>
                                <div className='solution-mobile-image'><img src={image5} alt="" /></div>
                                <p className='solution-mobile-heading'>IR Transformation Design & Consultancy</p>
                                <p className='solution-mobile-text'>Lorem ipsum dolor sit amet consectetur. Id enim tristique pretium aliquet donec lorem amet. Velit penatibus sit volutpat lobortis porta.</p>
                            </div>
                            <div className='solution-mobile-new'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;