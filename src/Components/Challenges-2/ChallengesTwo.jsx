import React from 'react';
import './ChallengesTwo.css';
import img1 from '../Images/challenges2/challenges2-1.png'
import img2 from '../Images/challenges2/challenges2-2.png'
import img3 from '../Images/challenges2/challenges2-3.png'

const ChallengesTwo = () => {
    return (
        <div className='challenges2body'>
            <p className='title challengesMoreTitle'>Industrial Landscape Challenges</p>
            <div className='challenges2contents'>
                <div className='challenges2-left'>
                    <div className='cha-heading'>Lack of Infrastructure for Data Driven Decision Making</div>
                    <div className='cha-text'>Factory's productivity and profitability may suffer from inefficiencies, lost opportunities, and higher operating expenses as a result of a lack of data-driven decision-making infrastructure.</div>
                    <div className='cha-image-left'><img src={img1} alt="" /></div>
                </div>
                <div className='challenges2-right'>
                    <div className='challenges2-top'>
                        <div className='cha-leftText'>
                            <div className='cha-heading-2'>Lack of Reliable Real-Time Data</div>
                            <div className='cha-text'>Real-time data is crucial for manufacturing and processing industries, enabling proactive decision-making, efficient resource allocation, and smooth production schedule optimization.</div>
                        </div>
                        <div className='cha-image right-img'><img src={img2} alt="" /></div>
                    </div>
                    <div className='challenges2-bottom'>
                        <div className='cha-leftText'>
                            <div className='cha-heading-2'>Hidden Loss</div>
                            <div className='cha-text'>Hidden losses in the manufacturing industry, including downtime, quality issues, and inventory management problems, can significantly impact efficiency and profitability. Addressing these requires a comprehensive approach.</div>
                        </div>
                        <div className='cha-image right-img'><img src={img3} alt="" /></div>
                    </div>
                </div>
            </div>
            
            <div className='challenges2-second'>
                <div className='challenges2-top1'>
                        <div className='cha-leftText'>
                            <div className='cha-img2'><img src={img1} alt="" /></div>
                            <div className='cha-heading'>Lack of Infrastructure for Data Driven Decision Making</div>
                            <div className='cha-text'>Factory's productivity and profitability may suffer from inefficiencies, lost opportunities, and higher operating expenses as a result of a lack of data-driven decision-making infrastructure.</div>
                        </div>
                        
                    </div>
                <div className='challenges2-top'>
                        <div className='cha-leftText'>
                            <div className='cha-img2'><img src={img2} alt="" /></div>
                            <div className='cha-heading'>Lack of Reliable Real-Time Data</div>
                            <div className='cha-text'>Real-time data is crucial for manufacturing and processing industries, enabling proactive decision-making, efficient resource allocation, and smooth production schedule optimization.</div>
                        </div>
                        
                    </div>
                <div className='challenges2-bottom'>
                        <div className='cha-leftText'>
                            <div className='cha-img2'><img src={img3} alt="" /></div>
                            <div className='cha-heading'>Hidden Loss</div>
                            <div className='cha-text'>Hidden losses in the manufacturing industry, including downtime, quality issues, and inventory management problems, can significantly impact efficiency and profitability. Addressing these requires a comprehensive approach.</div>
                        </div>
                </div>
            </div>
                
            <div>

            </div>
            
        </div>
    );
};

export default ChallengesTwo;