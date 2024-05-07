import React from 'react';
import CardL from '../10-Leaders/CardLeader'
import imageface1 from '../Images/Leaders/image 62.png'
import imageface2 from '../Images/Leaders/image 63.png'
import './ourleader.css'
const Ourleader = () => {
    return (
        <div>
            <p className='heading-ourLeaders'>Our Leaders</p>
            <div className='contents-ourL'>
                <div className='first-contents-ourL'>
                    <CardL title1="Insan Arafat Jamil" title2="Founder & CEO" image={imageface1}/>
                    <CardL title1="Insan Arafat Jamil" title2="Founder & CEO" image={imageface2}/>
                </div>
                <div className='second-contents-ourL'>
                    <CardL title1="Insan Arafat Jamil" title2="Founder & CEO" image={imageface1}/>
                    <CardL title1="Insan Arafat Jamil" title2="Founder & CEO" image={imageface1}/>
                    <CardL title1="Insan Arafat Jamil" title2="Founder & CEO" image={imageface1}/>
                </div>
            </div>
        </div>
    );
};

export default Ourleader;