import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';

const ContestDetails = () => {
  const { id } = useParams()

    const { data: contests = [], } = useQuery({
        queryKey: ['plants', id],
        queryFn: async () => {
            const result = await axios(`http://localhost:3000/contests/${id}`)
            return result.data
        },
    })

    return (
        <div>
            <h1>This details page</h1>
        </div>
    );
};

export default ContestDetails;