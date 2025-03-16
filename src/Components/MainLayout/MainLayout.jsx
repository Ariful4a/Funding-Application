import React from 'react';
import Navbar from './Headers/Navbar';
import HeroSlider from '../HeroSlider/HeroSlider';

import { Outlet } from 'react-router-dom';
const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSlider></HeroSlider>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;