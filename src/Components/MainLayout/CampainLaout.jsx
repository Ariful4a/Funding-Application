
import { Outlet } from 'react-router-dom';
import Navbar from "../MainLayout/Headers/Navbar";
import Footer from '../Footer/footer'

const CampainLaout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
            <div className="mt-10">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default CampainLaout;
