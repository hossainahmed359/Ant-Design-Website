import React from 'react';
import AppAbout from '../components/home/about';
import AppHero from '../components/home/hero';

const AppHome = () => {
    return (
        <div className="main">
            <AppHero />
            <AppAbout/>
        </div>
    );
};

export default AppHome;