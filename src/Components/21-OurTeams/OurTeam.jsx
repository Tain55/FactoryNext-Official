import React from 'react';
import './OurTeam.css';
import img1 from '../Images/our teams/Svg file/about1.svg'
import img2 from '../Images/our teams/Svg file/about2.svg'
import img3 from '../Images/our teams/Svg file/about3.svg'
import img4 from '../Images/our teams/Svg file/about4.svg'


const OurTeam = () => {
    return (
        <div className='teamBody'>
            <p className='title moreTtitle'>Our Teams</p>
            
            <div className='teamBody2'>
                <div className='teams'>
                    <div className='teamSingle'>
                        <div className='teamHeading'>
                            <img src={img1} alt="" />
                            <p>Business Team</p>
                        </div>
                        <div className='teamDetails'>
                            <p>Lorem ipsum dolor sit amet consectetur. Leo aliquam faucibus eget cras. Vivamus arcu eu commodo nulla. Porta sed euismod morbi in elit. Dui aliquam rhoncus nisi quam. Convallis viverra et dignissim pellentesque elementum lorem gravida. Feugiat hendrerit eget arcu commodo tellus quisque nisi purus mauris. Elit volutpat nunc leo blandit.</p>
                        </div>
                    </div>
                    <div className='teamSingle'>
                        <div className='teamHeading'>
                            <img src={img2} alt="" />
                            <p>Operation Team</p>
                        </div>
                        <div className='teamDetails'>
                            <p>Lorem ipsum dolor sit amet consectetur. Leo aliquam faucibus eget cras. Vivamus arcu eu commodo nulla. Porta sed euismod morbi in elit. Dui aliquam rhoncus nisi quam. Convallis viverra et dignissim pellentesque elementum lorem gravida. Feugiat hendrerit eget arcu commodo tellus quisque nisi purus mauris. Elit volutpat nunc leo blandit.</p>
                        </div>
                    </div>
                </div>
                <div className='teams'>
                    <div className='teamSingle'>
                        <div className='teamHeading'>
                            <img src={img3} alt="" />
                            <p>Tech Team</p>
                        </div>
                        <div className='teamDetails'>
                            <p>Lorem ipsum dolor sit amet consectetur. Leo aliquam faucibus eget cras. Vivamus arcu eu commodo nulla. Porta sed euismod morbi in elit. Dui aliquam rhoncus nisi quam. Convallis viverra et dignissim pellentesque elementum lorem gravida. Feugiat hendrerit eget arcu commodo tellus quisque nisi purus mauris. Elit volutpat nunc leo blandit.</p>
                        </div>

                    </div>
                    <div className='teamSingle'>
                        <div className='teamHeading'>
                            <img src={img4} alt="" />
                            <p>Support Team</p>
                        </div>
                        <div className='teamDetails'>
                            <p>Lorem ipsum dolor sit amet consectetur. Leo aliquam faucibus eget cras. Vivamus arcu eu commodo nulla. Porta sed euismod morbi in elit. Dui aliquam rhoncus nisi quam. Convallis viverra et dignissim pellentesque elementum lorem gravida. Feugiat hendrerit eget arcu commodo tellus quisque nisi purus mauris. Elit volutpat nunc leo blandit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;