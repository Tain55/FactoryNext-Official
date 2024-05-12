import React, { useState } from 'react';
import './Footer.css';
import logo from '../Images/logo.png';
import { GoArrowUpRight } from "react-icons/go";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";

const Footer = () => {
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);

  const toggleSolutionsDropdown = () => {
    setShowSolutionsDropdown(!showSolutionsDropdown);
  };

  const currentYear = new Date().getFullYear();
  
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
              <button>Message Now <GoArrowUpRight size="20px" style={{ marginBottom: "-5" }} /></button>
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
              <div className='footer-icons'>
                <MdFacebook style={{cursor: 'pointer'}}/>
                <FaLinkedin style={{cursor: 'pointer'}}/>
              </div>
            </div>
          </div>
        </div>

        <div className='footer-buttons'>
          <ul>
            <li><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
            <li><Link to='/about' style={{ textDecoration: 'none', color: 'white' }}>About Us</Link></li>
            <li className="dropdown">
              <span className="dropdown-btn" onClick={toggleSolutionsDropdown}>Our Solutions</span>
              {showSolutionsDropdown && (
                <div className="dropdown-content">
                  <Link to='/machine-monitoring'>Machine and Process Monitoring</Link>
                  <Link to='/environment-monitoring'>Environment Monitoring</Link>
                  <Link to='/energy-monitoring'>Energy & Utility Monitoring</Link>
                  <Link to='/ai-features'>AI Features</Link>
                  <Link to='/ir-transformation'>IR Transformation Design & Consultancy</Link>
                </div>
              )}
            </li>
            <li><Link to='/iotProducts' style={{ textDecoration: 'none', color: 'white' }}>IoT Products</Link></li>
            <li><Link to='/about' style={{ textDecoration: 'none', color: 'white' }}>Blogs</Link></li>
            <li><Link to='/informationdesk' style={{ textDecoration: 'none', color: 'white' }}>Information Desk</Link></li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>© {currentYear} Factory Next | All Rights Reserved | An ARTHOR Initiative</p>
      </div>
    </div>
  );
};

export default Footer;
