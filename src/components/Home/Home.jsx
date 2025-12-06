import React from 'react';
import Banner from '../../pages/Banner/Banner';
import Contests from '../contests/contests';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <div>
                <Contests></Contests>
            </div>
        </div>
    );
};

export default Home;