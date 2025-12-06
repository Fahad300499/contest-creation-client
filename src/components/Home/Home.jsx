import React from 'react';
import Banner from '../../pages/Banner/Banner';
import Contests from '../contests/contests';
import WinnerSection from '../../pages/winnerAdvertiseSection/WinnerSection';
import ExtraSection from '../../pages/ExtraSection/ExtraSection';

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
            <div>
                <ExtraSection></ExtraSection>
            </div>
        </div>
    );
};

export default Home;