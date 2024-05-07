import React from 'react';
import './InterestPartnership.css'

const InterestPartnership = () => {
    return (
        <div className='interest'>
            <div className='interest-body'>
            <p className='a'>Interested in Partnership?</p>
            <p className='b'>The Smart Factory Ecosystem</p>
            <p className='c'>We're open to collaborations with businesses and organizations. Reach out to us via the contact form below to discuss potential partnerships and mutual success.</p>
            <form className='interest' action="">
                <div className='interest-1'>
                    <input className='interest-form A' type="text" name="" id="" placeholder='Company Name'/>
                    <input className='interest-form A' type="text" name="" id="" placeholder='Your Name'/>
                </div>
                <div className='interest-2'>
                    <input className='interest-form A' type="text" name="" id="" placeholder='Company Role'/>
                    <input className='interest-form A' type="text" name="" id="" placeholder='Contact Number'/>
                </div>
                <textarea className='interest-form B' type="text" name="" id="" placeholder='Proposal'/>
                <input className='interest-form C' type="text" name="" id="" placeholder='Attachment (if any)'/>
                <button className='form-button moreOption'>Submit</button>
            </form>
        </div>
        </div>
    );
};

export default InterestPartnership;