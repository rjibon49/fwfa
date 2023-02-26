import React from 'react';
import GoToTop from '../../GotoTop';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import CollaborativeBanner from './CollaborativeBanner/CollaborativeBanner';
import CollaborativeLists from './CollaborativeLists/CollaborativeLists';

const Collaborative = () => {
    return (
        <>
        <Header />
        <div className='ae-form' style={{height:"100vh"}}>
            {/* <CollaborativeBanner />
            <CollaborativeLists /> */}
            <h1 style={{fontSize:"100px", color:"#505050"}}>Coming Soon</h1>
            <GoToTop />
        </div>
        <Footer />
        </>
    );
};

export default Collaborative;