import React from 'react';
import './WorkWithUs.css'

const WorkWithUs = () => {
    return (
        <div className='work-body'>
            <p className='a'>Work With Us?</p>
            <p className='b bMore'>A Global Team Of Expert Professionals</p>
            <p className='c cMore'>We are a team of designers, developers, musicians, and real life magicians hailing from different parts of the world.</p>
            <div className='buttons'>
                <button className='form-button btnMore'>Explore Job Openings</button>
                <button className='form-button btnMore btncolor'>Submit your CV</button>
            </div>
        </div>
    );
};

export default WorkWithUs;