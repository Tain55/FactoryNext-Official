import React, { useState } from 'react';
import './IotProducts.css';
import IotCard from '../../Components/25-IotCard/IotCard';
import NavigationBar from './../../Components/1-NavigationBar/NavigationBar';
import Footer from '../../Components/14-Footer/Footer';
import NavigationBar2 from '../../Components/NavigationBar-2/NavigationBar2';
import { Link, Outlet, Route, Router, Routes } from 'react-router-dom';
import MachineMonitoring from './Machine Monitoring/MachineMonitoring';
import OtherProducts from './Other products/OtherProducts';
import EnvironmentMonitoring from './Environment Monitoring/EnvitonmentMonitoring';

const IotProducts = () => {
    const [selectedText, setSelectedText] = useState('A');
    return (
        <div className='homepage'>
            <NavigationBar2/>
            <div className='IotProductsBody'>
                <div className='IotProductsTitle'>
                    <p className='IotText1'>Our Products</p>
                    <p className='IotText2'>Lonenatis enim phasellus. Sed sed pellentesqu onenatis enim phasellus. Sed sed pellentesque</p>
                </div>
                <div className='IotTabBar'>
                    <Link to="/iotproducts/machine-monitoring" className='IotTabBox' style={{textDecoration: 'none' , color: '#686868'}}><div className='divUnderline' onClick={() => setSelectedText('A')} style={{cursor:'pointer', borderBottom: selectedText ==='A'?'2px solid #1507ef':'', color: selectedText ==='A'?'#1507ef':''}}>Machine Monitoring</div></Link>
                    <Link to="/iotproducts/enivonment-monitoring" className='IotTabBox' style={{textDecoration: 'none' , color: '#686868'}}><div className='divUnderline' onClick={() => setSelectedText('B')} style={{cursor:'pointer', borderBottom: selectedText ==='B'?'2px solid #1507ef':'', color: selectedText ==='B'?'#1507ef':''}}>Environment Monitoring</div></Link>
                    <Link to="/iotproducts/other-products" className='IotTabBox' style={{textDecoration: 'none' ,  color: selectedText ==='C'?'#1507ef':'#686868'}}><div className='divUnderline' onClick={() => setSelectedText('C')} style={{cursor:'pointer',  borderBottom: selectedText ==='C'?'2px solid #1507ef':'', }}>Others</div></Link>
                </div>
                {/* here i want to add different components which will show based on the link of IotTabBar. Chat Gpt, how can I do that? */}
{/*             
                <Routes>
                    <Route path="machine-monitoring" element={<MachineMonitoring />} />
                    <Route path="enivonment-monitoring" element={<EnvironmentMonitoring />} />
                    <Route path="other-products" element={<OtherProducts />} />
                </Routes> */}
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default IotProducts;