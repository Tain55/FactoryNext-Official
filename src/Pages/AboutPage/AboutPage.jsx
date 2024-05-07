import React from 'react';
import NavigationBar from '../../Components/1-NavigationBar/NavigationBar';
import Nutshell from '../../Components/9-Nutshell/Nutshell';
import Footer from '../../Components/14-Footer/Footer';
import Story from '../../Components/15-OurStory/Story';
import ImageStory from './../../Components/16-Image-OurStrory/ImageStory';
import Ourleader from './../../Components/17-OurLeaders/Ourleader';
import OurTeam from './../../Components/21-OurTeams/OurTeam';
const AboutPage = () => {
    return (
        <div className='homepage'>
            <NavigationBar/>
            <ImageStory/>
            <Story/>
            <Nutshell/>
            <Ourleader/>
            <OurTeam/>
            <Footer/>
        </div>
    );
};

export default AboutPage;