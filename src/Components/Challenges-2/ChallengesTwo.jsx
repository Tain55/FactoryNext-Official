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
                    <div className='cha-heading'>No infrastructure for data driven decision making</div>
                    <div className='cha-text'>Lorem ipsum dolor sit amet consectetur. Id enim tristique pretium aliquet donec lorem amet. Velit penatibus sit volutpat lobortis porta. Neque nullam quam suspendisse semper velit vitae .pharetra risus</div>
                    <div className='cha-image-left'><img src={img1} alt="" /></div>
                </div>
                <div className='challenges2-right'>
                    <div className='challenges2-top'>
                        <div className='cha-leftText'>
                            <div className='cha-heading-2'>Lack of Reliable Real-Time Data</div>
                            <div className='cha-text'>Lorem ipsum dolor sit amet consectetur. Id enim tristique pretium aliquet donec lorem amet. Velit penatibus sit volutpat lobortis porta. Neque nullam quam suspendisse semper velit vitae .pharetra risus</div>
                        </div>
                        <div className='cha-image right-img'><img src={img2} alt="" /></div>
                    </div>
                    <div className='challenges2-bottom'>
                        <div className='cha-leftText'>
                            <div className='cha-heading-2'>Hidden loss</div>
                            <div className='cha-text'>Lorem ipsum dolor sit amet consectetur. Id enim tristique pretium aliquet donec lorem amet. Velit penatibus sit volutpat lobortis porta. Neque nullam quam suspendisse semper velit vitae .pharetra risus</div>
                        </div>
                        <div className='cha-image right-img'><img src={img3} alt="" /></div>
                    </div>
                </div>
            </div>
            
            <div className='challenges2-second'>
                <div className='challenges2-top1'>
                        <div className='cha-leftText'>
                            <div className='cha-img2'><img src={img1} alt="" /></div>
                            <div className='cha-number'>1</div>
                            <div className='cha-heading'>Lack of Reliable Real-Time Data</div>
                            <div className='cha-text'>Lorem ipsum dolor sit amet consectetur. Id enim tristique pretium aliquet donec lorem amet. Velit penatibus sit volutpat lobortis porta. Neque nullam quam suspendisse semper velit vitae .pharetra risus</div>
                        </div>
                        
                    </div>
                <div className='challenges2-top'>
                        <div className='cha-leftText'>
                            <div className='cha-img2'><img src={img2} alt="" /></div>
                            <div className='cha-number'>2</div>
                            <div className='cha-heading'>Lack of Reliable Real-Time Data</div>
                            <div className='cha-text'>Lorem ipsum dolor sit amet consectetur. Id enim tristique pretium aliquet donec lorem amet. Velit penatibus sit volutpat lobortis porta. Neque nullam quam suspendisse semper velit vitae .pharetra risus</div>
                        </div>
                        
                    </div>
                <div className='challenges2-bottom'>
                        <div className='cha-leftText'>
                            <div className='cha-img2'><img src={img3} alt="" /></div>
                            <div className='cha-number'>3</div>
                            <div className='cha-heading'>Hidden loss</div>
                            <div className='cha-text'>Lorem ipsum dolor sit amet consectetur. Id enim tristique pretium aliquet donec lorem amet. Velit penatibus sit volutpat lobortis porta. Neque nullam quam suspendisse semper velit vitae .pharetra risus</div>
                        </div>
                </div>
            </div>
                
            <div>

            </div>
            
        </div>
    );
};

export default ChallengesTwo;