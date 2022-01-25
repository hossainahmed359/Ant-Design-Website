import React from 'react';
import AppAbout from '../components/home/about';
import AppFeature from '../components/home/feature';
import AppHero from '../components/home/hero';
import AppWorks from '../components/home/works';

const AppHome = () => {
    return (
        <div className="main">
            <AppHero />
            <AppAbout/>
            <AppFeature/>
            <AppWorks/>
        </div>
    );
};

export default AppHome;