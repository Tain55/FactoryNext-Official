import './Footer.css'
import logo from '../Images/logo.png';
import { GoArrowUpRight } from "react-icons/go";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='footer-body'>
                <div className='footer-top'>
                    <div>
                        <img className='footer-logo' src={logo} alt="" />
                    </div>

                    <div className='footer-details'>
                        <div className='footer-details-first'>
                            <p>Have any questions?</p>
                            <button>Message Now <GoArrowUpRight size="20px" style={{marginBottom:"-5"}}/></button>
                        </div>
                        <div className='footer-details-second'>
                            <p className='head'>Head Office</p>
                            <p className='details'>62/4,kallyanpur Main Road, Kallyanpur, Dhaka-1207, Bangladesh</p>
                            <button>View on map</button>
                        </div>
                        <div className='footer-details-second'>
                            <p className='head'>Chittagong Office</p>
                            <p className='details'>1005/2 East Nasirabad, CDA Avenue, Chittagong, Bangladesh</p>
                            <button>View on map</button>
                        </div>
                        <div className='footer-details-third'>
                            <div className='head'>Contact us</div>
                            <div className='details'><IoMdCall /> +8801749074100</div>
                            <div className='details'><IoMdMail /> jamil@factorynext.com.bd</div>
                        </div>
                    </div>
                </div>

                <div className='footer-buttons'>

                </div>
                
            </div>
            <div className='footer-bottom'>
                <p>© 2023 Factory Next | All Rights Reserved | An ARTHOR Initiative</p>
            </div>

            
        </div>
    );
};

export default Footer;