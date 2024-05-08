import React from 'react';
import './HomePage.css'
import Transform from './../../Components/3-Transform/Transform';
import Image from './../../Components/2-Image/Image';
import Footer from '../../Components/14-Footer/Footer';
import Partnership from './../../Components/13-Partnership/Partnership';
import Social from './../../Components/12-Social/Social';
import Nutshell from './../../Components/9-Nutshell/Nutshell';
import Footprints from './../../Components/8-Footprints/Footprints';
import Solutions from './../../Components/6-Solutions/Solutions';
import Core from './../../Components/5-Core/Core';
import Blogs from './../../Components/11-Blogs/Blogs';
import Challenges from './../../Components/4-Challenges/Challenges';
import Serve from './../../Components/7-Serve/Serve';
import Leaders from './../../Components/10-Leaders/Leaders';
import NavigationBar from './../../Components/1-NavigationBar/NavigationBar';
import ChallengesTwo from './../../Components/Challenges-2/ChallengesTwo';

const HomePage = () => {
    return (
        <div className='homepage'>
            <NavigationBar/>     
            <Image/>
            <Transform/>
            <Challenges/>
            <ChallengesTwo/>
            <Core/>
            <Solutions/>
            <Serve/>
            <Footprints/>
            <Nutshell/>
            <Leaders/>
            <Blogs/>
            <Social/>
            <Partnership/>
            <Footer/>
        </div>
    );
};

export default HomePage;