import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const data = [
    {
        name: 'Fantom',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Tomb',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Chain',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Polygon',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Bitcoin',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Solana',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Avalanche',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default class SimpleBarChart extends PureComponent {

    render() {
        return (
            <div style={{ width: '100%', background: "white" }}>
                <ResponsiveContainer width={"100%"} height={300}>
                    <BarChart width={150} height={40} data={data}>
                        <CartesianGrid strokeDasharray="3 0" />
                        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="uv" fill="#1b96ff" />
                    </BarChart>
                </ResponsiveContainer>
                <p className='barLabel'>Bar Chart By Prerit </p>

            </div>

        );
    }
}
