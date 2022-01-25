import React from 'react';
import AppAbout from '../components/home/about';
import AppFeature from '../components/home/feature';
import AppHero from '../components/home/hero';

const AppHome = () => {
    return (
        <div className="main">
            <AppHero />
            <AppAbout/>
            <AppFeature/>
        </div>
    );
};

export default AppHome;