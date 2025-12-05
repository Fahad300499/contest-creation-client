import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar/Navbar';


const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <Navbar></Navbar>
            </div>

            <div>
                <Outlet />
            </div>

            {/* <Footer /> */}
        </div>
    );
};

export default MainLayout;