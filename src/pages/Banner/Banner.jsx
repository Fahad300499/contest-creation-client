import React from 'react';
import banner from '../../assets/contest banner.png'

const Banner = () => {
    return (
        <div className='relative'>
            <img className='rounded h-[600px] w-full' src={banner} alt="" srcset="" />
        <div className='absolute bottom-35 left-23'>
            <input className='border border-orange-500 rounded-3xl py-3 px-20' type="text" name="" placeholder='Serach Your Contest' id="" />
            <div>
                <button className='btn my-5 rounded-3xl px-10 py-5 bg-orange-400 text-white'>Search</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;