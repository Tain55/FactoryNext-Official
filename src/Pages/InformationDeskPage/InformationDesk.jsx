import './InformationDesk.css'

import React from 'react';
import NavigationBar from './../../Components/1-NavigationBar/NavigationBar';
import HaveQuestion from './../../Components/18-HaveQuestion/HaveQuestion';
import InterestPartnership from '../../Components/19-InterestPartnership/InterestPartnership';
import WorkWithUs from '../../Components/20-WorkWithUs/WorkWithUs';
import Footer from '../../Components/14-Footer/Footer';


const InformationDesk = () => {
    return (
        <div className='homepage'>
            <NavigationBar/>
            <HaveQuestion/>
            <InterestPartnership/>
            <WorkWithUs/>
            <Footer/>
        </div>
    );
};

export default InformationDesk;