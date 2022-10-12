import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const topics = useLoaderData();
    const individualTopics = topics.data;

    const data = [
        { id: individualTopics[0].id, total: individualTopics[0].total },
        { id: individualTopics[1].id, total: individualTopics[1].total },
        { id: individualTopics[2].id, total: individualTopics[2].total },
        { id: individualTopics[3].id, total: individualTopics[3].total },
    ];

    return (
        <div>
            <h4 className='m-5'>This is a Graphical view of total questions in a single topic.</h4>
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey='total' stroke="#8884d8" />
                <XAxis dataKey='id' />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Statistics;