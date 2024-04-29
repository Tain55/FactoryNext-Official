import './Transform.css'

import React, { useState } from 'react';

const transform = () => {

    const [selectedText, setSelectedText] = useState('A');

    return (
        <div className='transform-body'>
            <div className='transform-body-first'>
                
                <div className='transform'>
                    <p className='heading'>Transform your Industry with Factory Next</p>
                    <p>The Ecosystem for Smart Factories</p>
                    <div className='transform-buttons'>
                        <p onClick={() => setSelectedText('A')} style={{ cursor: 'pointer', fontWeight: selectedText === 'A' ? 'bold' : 'normal' }}>Manufacturing and Process monitoring solution</p>
                        <p onClick={() => setSelectedText('B')} style={{ cursor: 'pointer', fontWeight: selectedText === 'B' ? 'bold' : 'normal' }}>Environmental Monitoring and Compliance</p>
                        <p onClick={() => setSelectedText('C')} style={{ cursor: 'pointer', fontWeight: selectedText === 'C' ? 'bold' : 'normal' }}>Smart Energy and Utility Management</p>
                    </div>
                </div>
                
            </div>
            <div className='transform-body-second'>
                <div className='transform'>
                    <div style={{ display: selectedText === 'A' ? 'block' : 'none'}}>
                        <h2>Content for A</h2>
                        <img src="https://via.placeholder.com/150" alt="Placeholder" />
                        <p>This is some text for A</p>
                    </div>
                    <div style={{ display: selectedText === 'B' ? 'block' : 'none'}}>
                        <h2>Content for B</h2>
                        <p>This is some text for B</p>
                        <button>Button for B</button>
                    </div>
                    <div style={{ display: selectedText === 'C' ? 'block' : 'none'}}>
                        <h2>Content for C</h2>
                        <ul>
                            <li>List item 1</li>
                            <li>List item 2</li>
                            <li>List item 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default transform;