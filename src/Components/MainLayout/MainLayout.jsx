import React from 'react';
import Navbar from './Headers/Navbar';
import HeroSlider from '../HeroSlider/HeroSlider';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSlider></HeroSlider>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;