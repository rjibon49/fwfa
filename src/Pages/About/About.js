import React from 'react';
import GoToTop from '../../GotoTop';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import AboutBanner from './AboutBanner';
import AboutDetails from './AboutDetails';
import AboutMembers from './AboutMembers';

const About = () => {
    return (
        <>
            <Header />
            <div className='greenBg'>
                <AboutBanner />
                <AboutDetails />
                <AboutMembers />
            </div>
            <GoToTop />
            <Footer />
        </>
    );
};

export default About;