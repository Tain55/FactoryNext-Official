import './Nutshell.css';
import nutshell1 from '../Images/nutshell-1.png'
import nutshell2 from '../Images/nutshell-2.png'
import nutshell3 from '../Images/nutshell-3.png'

import React from 'react';

const Nutshell = () => {
    return (
        <div>
            <div className='nutshell'>
                <div className='nutshell-body'>
                    <p className='title moreNutshelltitle'>Factory Next in a Nutshell</p>
                    <div className='nutshell-details'>
                        <div className='nutshell-content nutshell-1'>
                            <div className='NutModify'><img src={nutshell1} alt="" /></div>
                            <p className='nutshel-heading'>Our Mission</p>
                            <p className='nutshel-descriprion'>By 2030, we aim to enhance efficiency, productivity, and sustainability in 500 factories through advanced IoT products and AI solutions, positioning ourselves as a leading provider in the region.</p>
                        </div>

                        <div className='nutshell-content nutshell-2'>
                            <div className=' NutModify'><img src={nutshell2} alt="" /></div>
                            <p className='nutshel-heading'>Our Vision</p>
                            <p className='nutshel-descriprion'>Our vision is to drive global industrial growth by fostering a smarter, connected future through innovation and excellence, enhancing manufacturing processes for efficiency and sustainability.</p>

                        </div>

                        <div className='nutshell-content nutshell-3'>
                            <div className=' NutModify'><img src={nutshell3} alt="" /></div>
                            <p className='nutshel-heading'>Our Values</p>
                            <p className='nutshel-descriprion'>With modern IoT devices and AI-powered solutions, our smart factory ecosystem transforms Bangladesh's industrial landscape while increasing efficiency by 30–40% and giving authority access to real-time information.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nutshell;