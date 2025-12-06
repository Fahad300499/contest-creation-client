import React from 'react';
import Banner from '../../pages/Banner/Banner';
import Contests from '../contests/contests';
import WinnerSection from '../../pages/winnerAdvertiseSection/WinnerSection';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <div>
                <Contests></Contests>
            </div>
            <div>
                <WinnerSection></WinnerSection>
            </div>
        </div>
    );
};

export default Home;