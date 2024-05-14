import React from 'react';
import './IotCard.css';
import img from '../Images/Iot Image/IOT Products/Mask group.png'

const IotCard = () => {
    return (
        <div className='IotCardBody'>
            <div>
                <div className='IotProductImage'><img src={img} alt="" /></div>
                <div className='IotCardName-Details'>
                    <p className='IotCard-name'>Product Name</p>
                    <p className='IotCard-details'>$97/device</p>
                </div>
                <div className='IotCard-Buttons'>
                    <div className='IotCard-LeftButton'>View more</div>
                    <div className='IotCard-RightButton'>Order Now</div>
                </div>
            </div>
        </div>
    );
};

export default IotCard;