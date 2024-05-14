import './Transform.css'
import image1 from '../Images/Transform/factory-workers-checking-quality-products-large-industrial-hall 1.png'
import logo1 from '../Images/Transform/Manufacturing-Active.png'
import logo2 from '../Images/Transform/Manufacturing-Default.png'
import logo3 from '../Images/Transform/Environmental Monitoring-Active.png'
import logo4 from '../Images/Transform/Environmental Monitoring-Default.png'
import logo5 from '../Images/Transform/Smart Energy-Active.png'
import logo6 from '../Images/Transform/Smart Energy-Default.png'

import React, { useState, useEffect } from 'react';

const transform = () => {

    const [selectedText, setSelectedText] = useState('A');

    useEffect(() => {
        const interval = setInterval(() => {
            switch (selectedText) {
                case 'A':
                    setSelectedText('B');
                    break;
                case 'B':
                    setSelectedText('C');
                    break;
                case 'C':
                    setSelectedText('D');
                    break;
                case 'D':
                    setSelectedText('E');
                    break;
                case 'E':
                    setSelectedText('A');
                    break;
                default:
                    setSelectedText('A');
            }
        }, 5000); // 5000 milliseconds = 5 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [selectedText]); 


    const renderLogoA = () => {
        if (selectedText === 'A') {
            return logo1;
        } else {
            return logo2;
        }
    }

    const renderLogoB = () => {
        if (selectedText === 'B') {
            return logo3;
        } else {
            return logo4;
        }
    }

    const renderLogoC = () => {
        if (selectedText === 'C') {
            return logo5;
        } else {
            return logo6;
        }
    }

    return (
        <div className='transform-body'>
            <div className='transform-body-first'>
                <div className='transform modifyTransform'>
                    <p className='heading'>Transform your Industry with Factory Next</p>
                    <p className='heading2'>The Ecosystem for Smart Factories</p>
                    <div className='transform-buttons'>
                        <div className='transformTotal'><p className='transformB oneT' onClick={() => setSelectedText('A')} style={{cursor: 'pointer', color: selectedText === 'A' ? '#393536' : '#9d9d9d', borderImage: selectedText === 'A' ? 'linear-gradient(90deg, #2966F7, #FF00CF) 1':'', borderWidth: selectedText==='A'?'3px':'1px',
    borderStyle: 'solid',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none'}}>Connect and Analyze</p> <div className={`white arrowA ${selectedText === 'A' ? 'active' : ''}`}></div></div>
                        <div className='transformTotal'><p className='transformB twoT' onClick={() => setSelectedText('B')} style={{ cursor: 'pointer', color: selectedText === 'B' ? '#393536' : '#9d9d9d', borderImage: selectedText === 'B' ? 'linear-gradient(90deg, #2966F7, #FF00CF) 1':'', borderWidth: selectedText==='B'?'3px':'1px', 
    borderStyle: 'solid',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none'}}>Uncover hidden loss & improve efficiency</p><div className={`white arrowB ${selectedText === 'B' ? 'active' : ''}`}></div></div>

<div className='transformTotal'><p className='transformB twoT1' onClick={() => setSelectedText('C')} style={{ cursor: 'pointer', color: selectedText === 'C' ? '#393536' : '#9d9d9d', borderImage: selectedText === 'C' ? 'linear-gradient(90deg, #2966F7, #FF00CF) 1':'', borderWidth: selectedText==='C'?'3px':'1px', 
    borderStyle: 'solid',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none'}}>Optimize energy & utility usage</p><div className={`white arrowB ${selectedText === 'C' ? 'active' : ''}`}></div></div>

<div className='transformTotal'><p className='transformB twoT2' onClick={() => setSelectedText('D')} style={{ cursor: 'pointer', color: selectedText === 'D' ? '#393536' : '#9d9d9d', borderImage: selectedText === 'D' ? 'linear-gradient(90deg, #2966F7, #FF00CF) 1':'', borderWidth: selectedText==='D'?'3px':'1px', 
    borderStyle: 'solid',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none'}}>Automate environmental management</p><div className={`white arrowB ${selectedText === 'D' ? 'active' : ''}`}></div></div>

                        <div className='transformTotal'> <p className='transformB threeT' onClick={() => setSelectedText('E')} style={{ cursor: 'pointer', color: selectedText === 'E' ? '#393536' : '#9d9d9d', borderImage: selectedText === 'E' ? 'linear-gradient(90deg, #2966F7, #FF00CF) 1':'', borderWidth: selectedText==='E'?'3px':'1px',  
    borderStyle: 'solid',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none' }}>Better compliance and safety</p> <div className={`white arrowC ${selectedText === 'E' ? 'active' : ''}`}></div></div>
    

    
                    </div>
                </div>
            </div>

            <div className='transform-moileview-icons' >
                <div className='transform-single-icon' onClick={() => setSelectedText('A')} style={{borderBottom: selectedText==='A'? '4px solid #1570EF':'none'}}>
                    <img src={renderLogoA()} alt="" />
                </div>
                <div className='transform-single-icon' onClick={() => setSelectedText('B')} style={{borderBottom: selectedText==='B'? '4px solid #1570EF':'none'}}>
                    <img src={renderLogoB()} alt="" />
                </div>
                <div className='transform-single-icon' onClick={() => setSelectedText('C')} style={{borderBottom: selectedText==='B'? '4px solid #1570EF':'none'}}>
                    <img src={renderLogoB()} alt="" />
                </div>
                <div className='transform-single-icon' onClick={() => setSelectedText('D')} style={{borderBottom: selectedText==='B'? '4px solid #1570EF':'none'}}>
                    <img src={renderLogoB()} alt="" />
                </div>
                <div className='transform-single-icon' onClick={() => setSelectedText('E')} style={{borderBottom: selectedText==='C'? '4px solid #1570EF':'none'}}>
                    <img src={renderLogoC()} alt="" />
                </div>
            </div>

            <div className='transform-body-second'>
                <div className='transform'>
                    <div style={{ display: selectedText === 'A' ? 'block' : 'none', }}>
                        <p className='trans-2-heading'>Connect and Analyze </p>
                        <p className='trans-2-peragraph'>Connect machinery, analyze data for instant insights, enabling informed decisions and operational agility with Factory Next's IoT Platform</p>
                        <div className='trans-image'><img src={image1} alt="" /></div>
                    </div>
                    <div style={{ display: selectedText === 'B' ? 'block' : 'none'}}>
                        <p className='trans-2-heading'>Uncover hidden loss & improve efficiency</p>
                        <p className='trans-2-peragraph'>Identify inefficiencies and bottlenecks, mitigate losses, and maximize operational efficiency with our monitoring platform and AI algorithms. </p>
                        <div className='trans-image'><img src={image1} alt="" /></div>
                    </div>
                    <div style={{ display: selectedText === 'C' ? 'block' : 'none'}}>
                        <p className='trans-2-heading'>Optimize energy & utility usage</p>
                        <p className='trans-2-peragraph'>Enhance sustainability and reduce costs by optimizing energy and utility usage with our smart factory tools and predictive analytics.</p>
                        <div className='trans-image'><img src={image1} alt="" /></div>
                    </div>
                    <div style={{ display: selectedText === 'D' ? 'block' : 'none'}}>
                        <p className='trans-2-heading'>Automate environmental management</p>
                        <p className='trans-2-peragraph'>Streamline environmental management processes, ensure regulatory compliance, and maintain a safe workplace with our smart  environment management solution.</p>
                        <div className='trans-image'><img src={image1} alt="" /></div>
                    </div>
                    <div style={{ display: selectedText === 'E' ? 'block' : 'none'}}>
                        <p className='trans-2-heading'>Better compliance and safety</p>
                        <p className='trans-2-peragraph'>Elevate safety standards, ensure regulatory compliance, and foster a secure workplace environment with our  comprehensive compliance and safety solutions</p>
                        <div className='trans-image'><img src={image1} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default transform;