import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
    {
        name: 'Page A',
        Label: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        Label: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        Label: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        Label: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        Label: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        Label: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        Label: 3490,
        pv: 4300,
        amt: 2100,
    },
];


export default function DefiPerformanceChart() {
    return (
        <div style={{ backgroundColor: "white", width: "60%", padding: 5 }}>
            <p className='titleLabel'>Defi Quarterly Performance </p>
            <ResponsiveContainer height={400}>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 0" />
                    <Legend verticalAlign="bottom" wrapperStyle={{ lineHeight: '40px' }} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="Label" stroke="#8884d8" fill="#1b96ff" />
                </AreaChart>
            </ResponsiveContainer>

        </div>

    );
}
