import React, { useEffect, useState } from 'react';
import GoToTop from '../../GotoTop';
import Popup from '../Popup/Popup';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import AboutEvents from './AboutEvents';
import Banner from './Banner';
import Community from './Community';
import Different from './Different';
import EventPoster from './EventPoster';
import HomeEvents from './HomeEvents';
import OurBlog from './OurBlog';
import Ship from './Ship';
import SigninBanner from './SigninBanner';
import Slider from './Slider';

const Home = () => {
    // const [timedPopup, setTimedPopup] = useState(false)

    // useEffect(() => {
    //     setTimeout (() => {
    //         setTimedPopup(true)
    //     }, 5000);
    // }, []);

    return (
        <>
            <Header />
            <div className='greenBg'>
                {/* <Popup trigger={timedPopup} setTrigger={setTimedPopup} >
                </Popup> */}
                <Slider />
                <EventPoster />
                <Banner />
                <Ship />
                <Different />
                <Community />
                <HomeEvents />
                <AboutEvents />
                <OurBlog />
                <SigninBanner />
            </div>
            <GoToTop />
            <Footer />
        </>
    );
};

export default Home;