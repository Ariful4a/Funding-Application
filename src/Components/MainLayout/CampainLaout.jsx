

import { Outlet } from 'react-router-dom';
import Navbar from "../MainLayout/Headers/Navbar";

const CampainLaout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
        </div>
    );
};

export default CampainLaout;
