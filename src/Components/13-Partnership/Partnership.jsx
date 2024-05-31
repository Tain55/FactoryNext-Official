import './Partnership.css'
import img1 from '../../Components/Images/Partnership logos/arthor.png'
import img2 from '../../Components/Images/Partnership logos/image 68.png'
import img3 from '../../Components/Images/Partnership logos/image 69.png'
import img4 from '../../Components/Images/Partnership logos/image 70.png'
import img5 from '../../Components/Images/Partnership logos/image 71.png'
import img6 from '../../Components/Images/Partnership logos/image 72.png'
import img7 from '../../Components/Images/Partnership logos/image 73.png'
import img8 from '../../Components/Images/Partnership logos/image 74.png'
import img9 from '../../Components/Images/Partnership logos/image 75.png'
import img10 from '../../Components/Images/Partnership logos/image 76.png'
import img11 from '../../Components/Images/Partnership logos/image 77.png'
import img12 from '../../Components/Images/Partnership logos/image 78.png'



import React from 'react';

const Partnership = () => {
    return (
        <div className='partner-body'>
            <p className='title modifyTitle'>Partnerships and Collaborations</p>
            <div className='partner-logo-box'>
                <div className='partner-logos'>
                    <div className='logo1 logosmall1'><img className='logoHeight' src={img1} alt="" /></div>
                    <div className='logo1 logosmall1'><img src={img2} alt="" /></div>
                    <div className='logo2 logosmall2'><img src={img3} alt="" /></div>
                    <div className='logo1 logosmall1'><img src={img7} alt="" /></div>
                    <div className='logo1 logosmall1'><img src={img8} alt="" /></div>
                    <div className='logo2 logosmall2'><img src={img9} alt="" /></div>
                    <div className='logo3 logosmall3'><img src={img10} alt="" /></div>
                    <div className='logo3 logosmall3'><img src={img11} alt="" /></div>
                    <div className='logo4 logosmall4'><img src={img12} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Partnership;