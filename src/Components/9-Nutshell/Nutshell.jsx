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
                    <p className='title'>Factory Next in a Nutshell</p>
                    <div className='nutshell-details'>
                        <div className='nutshell-content nutshell-1'>
                            <div className='image'><img src={nutshell1} alt="" /></div>
                            <p className='nutshel-heading'>Our Mission</p>
                            <p className='nutshel-descriprion'>Our mission is to improve productivity and profitability of factories with next generation technologies and data-driven solutions.</p>

                        </div>

                        <div className='nutshell-content nutshell-2'>
                            <div className='image'><img src={nutshell2} alt="" /></div>
                            <p className='nutshel-heading'>Our Vison</p>
                            <p className='nutshel-descriprion'>Our mission is to improve productivity and profitability of factories with next generation technologies and data-driven solutions.</p>

                        </div>

                        <div className='nutshell-content nutshell-3'>
                            <div className='image'><img src={nutshell3} alt="" /></div>
                            <p className='nutshel-heading'>Our Values</p>
                            <p className='nutshel-descriprion'>Our mission is to improve productivity and profitability of factories with next generation technologies and data-driven solutions.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nutshell;