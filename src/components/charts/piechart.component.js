import React from 'react';
import { PieChart, Pie,  Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


export default function CustomPieChart() {
    return (
        <div style={{ backgroundColor: "white", width: "32.5%", padding: 5, marginTop: 10 }}>
            <p className='titleLabel'>Chain Split </p>
            <ResponsiveContainer width={"100%"} height={400}>
                <PieChart width={"100%"} height={400} >
                    <Pie
                        data={data}
                        innerRadius={110}
                        outerRadius={130}
                        fill="#8884d8"
                        paddingAngle={0}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

