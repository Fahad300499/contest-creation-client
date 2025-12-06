import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer/Footer';


const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <Navbar></Navbar>
            </div>

            <div>
                <Outlet />
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;