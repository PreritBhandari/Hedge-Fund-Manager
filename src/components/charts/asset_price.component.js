import React from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 4000,
        amt: 4000,
    },

];


export default function AssetPrice() {
    return (
        <div style={{ backgroundColor: "white", width: "33%", padding: 5, marginTop: 10 }}>
            <p className='titleLabel'>Asset Price Change </p>
            <ResponsiveContainer height={400}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}          
                >
                    <Bar dataKey="amt" fill="#1b96ff" />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
