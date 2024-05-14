import React from 'react';
import './IotProducts.css';
import IotCard from '../../Components/25-IotCard/IotCard';
import NavigationBar from './../../Components/1-NavigationBar/NavigationBar';
import Footer from '../../Components/14-Footer/Footer';

const IotProducts = () => {
    return (
        <div className='homepage'>
            <NavigationBar/>
            <div className='IotProductsBody'>
                <div className='IotProductsTitle'>
                    <p className='IotText1'>Our Products</p>
                    <p className='IotText2'>Lonenatis enim phasellus. Sed sed pellentesqu onenatis enim phasellus. Sed sed pellentesque</p>
                </div>
                <div className='TabBar'>
                    <div className='TabBox'>Machine Monitoring</div>
                    <div className='TabBox'>Environment Monitoring</div>
                    <div className='TabBox'>Others</div>
                </div>
                <div className='IotProductsGrid'>
                    <IotCard/>
                    <IotCard/>
                    <IotCard/>
                    <IotCard/>
                    <IotCard/>
                    <IotCard/>
                    <IotCard/>
                    <IotCard/>
                    <IotCard/>
                    <IotCard/>
                    <IotCard/>
                    <IotCard/>
                    <IotCard/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default IotProducts;