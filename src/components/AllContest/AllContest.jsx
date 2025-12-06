import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router';


const MAX_DESCRIPTION_LENGTH = 100;

const AllContest = () => {
     const { data: allContests = [], isLoading } = useQuery({
        queryKey: ['allContest'],
        queryFn: async () => {
            const result = await axios(`http://localhost:3000/all-contests`)
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
            <div>
                 <h1 className='text-3xl font-bold text-center mt-6'>All Contest</h1>
            <div className='grid grid-cols-3 gap-10 p-5'>
                {
                    allContests.map(contest => <div>
                        <div key={contest._id} className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    src={contest.image}
                                    alt="contest" />
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
                                    <Link to={`/contest/${contest._id}`} className="btn bg-amber-500 text-white w-full">Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    )
                }
            </div>
            </div>
        </div>
    );
};

export default AllContest;