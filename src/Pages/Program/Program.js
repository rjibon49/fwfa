import React from 'react';
import GoToTop from '../../GotoTop';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import ProgramBanner from './ProgramBanner';
import ProgramLists from './ProgramLists';

const Program = () => {
    return (
        <div>
            <Header />
            <ProgramBanner />
            <ProgramLists />
            <GoToTop />
            <Footer />
        </div>
    );
};

export default Program;