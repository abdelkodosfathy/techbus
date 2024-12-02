// File: src/components/BarChartComponent.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Sat', value: 4062 },
  { name: 'Sun', value: 7128 },
  { name: 'Mon', value: 8442 },
  { name: 'Tue', value: 6688 },
  { name: 'Wed', value: 4028 },
  { name: 'Thu', value: 4400 },
  { name: 'Fri', value: 9186 },
]

const CustomBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#555555" />
        <YAxis stroke="#555555" />
        <Tooltip />
        <Legend />
        {/* Bar Chart */}
        <Bar
        
          dataKey="value"
          fill="var(--main)"
          barSize={15}
          radius={[5, 5, 0, 0]}  // Rounded corners (top-left, top-right, bottom-right, bottom-left)

        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
