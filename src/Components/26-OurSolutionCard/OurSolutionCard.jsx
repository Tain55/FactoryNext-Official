import React, { useState } from 'react';
import './OurSolutionCard.css';
import img from '../Images/Our Soluitions new/Our Solutions/1.png'
import Mimg from '../Images/Our Soluitions new/Our Solutions/mobile View/mobile 1.png'


const OurSolutionCard = ({title,details}) => {
    const [solution, setSolution] = useState('a');

    

    return (
        <div className='SolutionBody'>
            <div className='SolutionLeft'>
                <div className='SContents'>
                    <p className='SLeftH'>{title}</p>
                    <p className='SLeftP'>{details}</p>
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