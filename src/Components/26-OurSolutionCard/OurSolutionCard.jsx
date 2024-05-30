import React, { useState } from 'react';
import './OurSolutionCard.css';
import img from '../Images/Our Soluitions new/Our Solutions/1.png'
import Mimg from '../Images/Our Soluitions new/Our Solutions/mobile View/mobile 1.png'


const OurSolutionCard = () => {
    const [solution, setSolution] = useState('a');

    

    return (
        <div className='SolutionBody'>
            <div className='SolutionLeft'>
                <div className='SContents'>
                    <p className='SLeftH'>Machine and Process Monitoring</p>
                    <p className='SLeftP'>Lorem ipsum dolor sit amet consectetur. Diam ultrices placerat viverra volutpat elementum amet. Auctor dolor donec diam ornare consequat. Ornare vestibulum rhoncus nunc erat lacus diam blandit condimentum risus. Etiam nisl commodo eget suscipit. A viverra tincidunt imperdiet id quis tellus nibh nunc convallis. A sed id vestibulum et sed.</p>
                    <div className='Social-Button SolutionB'>Know More</div>
                </div>
            </div>

            <div className='SolutionRight'>
                {window.innerWidth < 746 ? <img src={Mimg} alt="" /> : <img src={img} alt="" />}
            </div>
        </div>
    );
};

export default OurSolutionCard;