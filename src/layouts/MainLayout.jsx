import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            {/* <Navbar /> */}
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      {/* <Footer /> */}
        </div>
    );
};

export default MainLayout;