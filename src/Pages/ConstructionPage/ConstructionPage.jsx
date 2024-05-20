import React from 'react';
import './ConstructionPage.css';
import NavigationBar from './../../Components/1-NavigationBar/NavigationBar';
import Footer from '../../Components/14-Footer/Footer';
import image1 from '../../Components/Images/Construction/Under construction/image 131.png'

const ConstructionPage = () => {
    return (
        <div className='homepage'>
            <NavigationBar/>
            <div className='about-image' style={{ position: 'relative' }}>
                <div className='construction-components'>
                    <div className='image-body ConstructionUpdate' style={{
                        position: 'relative', // Ensure the image-body div is positioned
                        overflow: 'hidden' // Prevents any overflow from child elements
                    }}>
                        {/* Overlay */}
                        <div className='img-overlay' style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#0c0c0c81', // Red overlay with 50% opacity
                            zIndex: 1 // Ensure the overlay is above the image

                        }}>

                            <div className='image-text-ab2' style={{textAlign: 'center', zIndex:2}}>
                                <p className='image-p2' >Page Under Construction:</p>
                                <p className='image-p2' >Stay Tuned for Update</p>
                            </div>
                        </div>

                        {/* Image */}
                        <img className='img' src={image1} alt="" style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block' // Ensures the image behaves as a block element
                        }} />
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ConstructionPage;