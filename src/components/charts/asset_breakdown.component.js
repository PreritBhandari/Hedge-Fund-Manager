import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        Fantom: 4000,
        Ethereum: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        Fantom: 3000,
        Ethereum: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        Fantom: 2000,
        Ethereum: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        Fantom: 2780,
        Ethereum: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        Fantom: 1890,
        Ethereum: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        Fantom: 2390,
        Ethereum: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        Fantom: 3490,
        Ethereum: 4300,
        amt: 2100,
    },
];

export default function AssetBreakdown() {
    return (
        <div style={{ backgroundColor: "white", width: "39%", padding: 5 }}>
            <p className='titleLabel'>Asset Breakdown </p>
            <ResponsiveContainer height={400}>
                <BarChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Ethereum" stackId="a" fill="#8884d8" />
                    <Bar dataKey="Fantom" stackId="a" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
