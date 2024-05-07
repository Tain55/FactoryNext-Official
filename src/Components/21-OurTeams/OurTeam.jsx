import React from 'react';
import './OurTeam.css';
import img1 from '../Images/our teams/growth.png'
import img2 from '../Images/our teams/operational-system.png'
import img3 from '../Images/our teams/code (2).png'
import img4 from '../Images/our teams/customer-service.png'


const OurTeam = () => {
    return (
        <div className='teamBody'>
            <p className='title moreTtitle'>Our Teams</p>
            <div className='teamDetails'>
                <div className='teamBox'>
                    <div className='teamImage'><img src={img1} alt="" /></div>
                    <p>Business Team</p>
                </div>
                <div className='teamBox'>
                    <div className='teamImage'><img src={img2} alt="" /></div>
                    <p>Operation Team</p>
                </div>
                <div className='teamBox'>
                    <div className='teamImage'><img src={img3} alt="" /></div>
                    <p>Tech Team</p>
                </div>
                <div className='teamBox'>
                    <div className='teamImage'><img src={img4} alt="" /></div>
                    <p>Support Team</p>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;