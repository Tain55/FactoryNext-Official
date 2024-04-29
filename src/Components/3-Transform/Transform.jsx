import './Transform.css'
import image1 from '../Images/Transform/factory-workers-checking-quality-products-large-industrial-hall 1.png'

import React, { useState } from 'react';

const transform = () => {

    const [selectedText, setSelectedText] = useState('A');

    return (
        <div className='transform-body'>
            <div className='transform-body-first'>
                <div className='transform'>
                    <p className='heading'>Transform your Industry with Factory Next</p>
                    <p className='heading2'>The Ecosystem for Smart Factories</p>
                    <div className='transform-buttons'>
                        <p className='transformB oneT' onClick={() => setSelectedText('A')} style={{ cursor: 'pointer', color: selectedText === 'A' ? '#393536' : '#9d9d9d' }}>Manufacturing and Process monitoring</p>
                        <p className='transformB twoT' onClick={() => setSelectedText('B')} style={{ cursor: 'pointer', color: selectedText === 'B' ? '#393536' : '#9d9d9d' }}>Environmental Monitoring and Compliance</p>
                        <p className='transformB threeT' onClick={() => setSelectedText('C')} style={{ cursor: 'pointer', color: selectedText === 'C' ? '#393536' : '#9d9d9d' }}>Smart Energy and Utility Management</p>
                    </div>
                </div>
            </div>
            <div className='transform-body-second'>
                <div className='transform'>
                    <div style={{ display: selectedText === 'A' ? 'block' : 'none'}}>
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