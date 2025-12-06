import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const MAX_DESCRIPTION_LENGTH = 100;

const Contests = () => {
    const { data: contests = [], isLoading } = useQuery({
        queryKey: ['plants'],
        queryFn: async () => {
            const result = await axios(`http://localhost:3000/contests`)
            return result.data
        },
    })

    const getShortDescription = (description, limit) => {
        if (!description) return "";
        return description.length > limit 
               ? description.slice(0, limit) + "..."
               : description;
    };

  
    return (
        <div>
            <h1>contest total : {contests.length}</h1>
            <h1 className='text-3xl font-bold text-center mt-6'>Populer Contest</h1>
            <div className='grid grid-cols-3 gap-10 p-5'>
                {
                    contests.map(contest => <div>
                        <div key={contest._id} className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    src={contest.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <div className='flex justify-between gap-3 items-center'>
                                    <h2 className="card-title">{contest.contestName}</h2>
                                    <p>{contest.participants}</p>
                                </div>
                                {/* 3. শর্ট ডিস্ক্রিপশন প্রয়োগ */}
                                <p className='text-gray-600 mt-2'>
                                    {getShortDescription(contest.description, MAX_DESCRIPTION_LENGTH)}
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-amber-500 text-white w-full">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    )
                }
            </div>

        </div>
    );
};

export default Contests;