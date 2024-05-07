import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import image1 from '../Images/Information Desk/side-view-line-call-centre-employees-are-smiling 1.png'
import './HaveQuestion.css'

const HaveQuestion = () => {
    return (
        <div className='question-body'>
            <p className='queation-heading'>Have a question?</p>
            <p className='question-p'>We're here to help! Feel free to reach out to us via the contact form below,
and we will contact you within a business day.</p>

            <div className='question-content'>
                <div className='question-body-left'>
                    <img src={image1} alt="" />
                </div>
                <div className='question-body-right'>
                    <div className='question-form'>
                        <form className='form' action="">
                            <input className='question-input' type="text" name="" id="" placeholder='Full Name' />
                            <input className='question-input' type="text" name="" id="" placeholder='E-mail'/>
                            <textarea  className='question-input textarea' type="text" name="" id="" placeholder='Requirements or Problems'/>
                            <input className='question-input' type="text" name="" id="" placeholder='Attachment link (if any)'/>
                            <button className='form-button'>Submit</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default HaveQuestion;