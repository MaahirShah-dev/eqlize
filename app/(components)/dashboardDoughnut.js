"use client";
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashboardDoughnut() {
  // Define the data for the Doughnut Chart
  const data = {
    datasets: [
      {
        label: 'Expenses',
        data: [500, 1000], // Example data
        backgroundColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ]
      },
    ],
  };

  return (
    <div className='w-[250px] h-[250px] flex items-center justify-center'>
      <Doughnut data={data}/>
    </div>
  );
}
