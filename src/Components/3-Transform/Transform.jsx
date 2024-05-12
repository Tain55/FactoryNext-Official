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
    borderBottom: 'none'}}>Manufacturing and Process monitoring</p> <div className={`white arrowA ${selectedText === 'A' ? 'active' : ''}`}></div></div>
                        <div className='transformTotal'><p className='transformB twoT' onClick={() => setSelectedText('B')} style={{ cursor: 'pointer', color: selectedText === 'B' ? '#393536' : '#9d9d9d', borderImage: selectedText === 'B' ? 'linear-gradient(90deg, #2966F7, #FF00CF) 1':'', borderWidth: selectedText==='B'?'3px':'1px', 
    borderStyle: 'solid',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none'}}>Environmental Monitoring and Compliance</p><div className={`white arrowB ${selectedText === 'B' ? 'active' : ''}`}></div></div>
                        <div className='transformTotal'> <p className='transformB threeT' onClick={() => setSelectedText('C')} style={{ cursor: 'pointer', color: selectedText === 'C' ? '#393536' : '#9d9d9d', borderImage: selectedText === 'C' ? 'linear-gradient(90deg, #2966F7, #FF00CF) 1':'', borderWidth: selectedText==='C'?'3px':'1px',  
    borderStyle: 'solid',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none' }}>Smart Energy and Utility Management</p> <div className={`white arrowC ${selectedText === 'C' ? 'active' : ''}`}></div></div>
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
                <div className='transform-single-icon' onClick={() => setSelectedText('C')} style={{borderBottom: selectedText==='C'? '4px solid #1570EF':'none'}}>
                    <img src={renderLogoC()} alt="" />
                </div>
            </div>

            <div className='transform-body-second'>
                <div className='transform'>
                    <div style={{ display: selectedText === 'A' ? 'block' : 'none', }}>
                        <p className='trans-2-heading'>Manufacturing</p>
                        <p className='trans-2-peragraph'>Discover a new era of manufacturing with Factory Next. Our cutting-edge solutions optimize production workflows, increase productivity, and elevate product quality. From automated assembly lines to real-time monitoring systems, we provide the tools you need to transform your factory into a smart, efficient operation. Join us in reshaping the future of manufacturing with Factory Next. We provide the tools you need to transform your factory into a smart.</p>
                        <div className='trans-image'><img src={image1} alt="" /></div>
                    </div>
                    <div style={{ display: selectedText === 'B' ? 'block' : 'none'}}>
                        <p className='trans-2-heading'>Environmental Monitoring</p>
                        <p className='trans-2-peragraph'>Discover a new era of manufacturing with Factory Next. Our cutting-edge solutions optimize production workflows, increase productivity, and elevate product quality. From automated assembly lines to real-time monitoring systems, we provide the tools you need to transform your factory into a smart, efficient operation. Join us in reshaping the future of manufacturing with Factory Next. We provide the tools you need to transform your factory into a smart.</p>
                        <div className='trans-image'><img src={image1} alt="" /></div>
                    </div>
                    <div style={{ display: selectedText === 'C' ? 'block' : 'none'}}>
                        <p className='trans-2-heading'>Smart Energy</p>
                        <p className='trans-2-peragraph'>Discover a new era of manufacturing with Factory Next. Our cutting-edge solutions optimize production workflows, increase productivity, and elevate product quality. From automated assembly lines to real-time monitoring systems, we provide the tools you need to transform your factory into a smart, efficient operation. Join us in reshaping the future of manufacturing with Factory Next. We provide the tools you need to transform your factory into a smart.</p>
                        <div className='trans-image'><img src={image1} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default transform;