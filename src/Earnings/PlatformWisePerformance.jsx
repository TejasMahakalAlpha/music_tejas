import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler
} from 'chart.js';
import './PlatformWisePerformance.css';


ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler
);

const PlatformWisePerformance = () => {
  
  const platformData = {
    labels: ['Jan-22', 'Feb-22', 'Mar-22', 'Apr-22', 'May-22', 'Jun-22'],
    datasets: [
      {
        label: 'YouTube Channel in CMS',
        data: [12000, 7000, 5000, 4800, 4500, 4000],
        backgroundColor: 'rgba(163, 250, 12, 0.4)',
        borderColor: '#fb8c00',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'YouTube Content id (ugc)',
        data: [12000, 7000, 5000, 4800, 4500, 4000],
        backgroundColor: 'rgba(251, 140, 0, 0.4)',
        borderColor: '#fb8c00',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Meta (Facebook , Instagram , Whataspp)',
        data: [12000, 7000, 5000, 4800, 4500, 4000],
        backgroundColor: 'rgba(74, 115, 185, 0.4)',
        borderColor: '#23ba1bff',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Spotify',
        data: [0, 4000, 2000, 5000, 2500, 3000],
        // backgroundColor: 'rgba(253, 216, 53, 0.4)',
                backgroundColor: 'rgba(4, 71, 17, 0.4)',

        borderColor: '#fdd835',
        fill: true,
        tension: 0.4,
      },
       {
        label: 'JIOSAAVN',
        data: [0, 1000, 1100, 1200, 1300, 1200],
        backgroundColor: 'rgba(67, 160, 71, 0.5)',
        borderColor: '#43a047',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const monthData = {
    labels: ['Jan-22', 'Feb-22', 'Mar-22', 'Apr-22', 'May-22', 'Jun-22'],
    datasets: [
      {
        label: 'Revenue',
        data: [11000, 6200, 13000, 12300, 13500, 12500],
        backgroundColor: '#e53935',
        borderRadius: 4,
        barThickness: 25,
      },
    ],
  };
  
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { },
    scales: { },
  };

  return (
    <div className="performance-dashboard">
      <div className="chart-container">
       
        <div className="chart-wrapper">
            <h1>Platform-wise Performance</h1>
          <Line 
          
            options={{...chartOptions, plugins: {...chartOptions.plugins, title: {...chartOptions.plugins.title, text: 'Platform-wise Performance'}}}} 
            data={platformData} 
          />
        </div>
      </div>
      <div className="chart-container">
        <h1>Month-wise Performance</h1>
        <div className="chart-wrapper">
          <Bar 
            options={{...chartOptions, plugins: {...chartOptions.plugins, legend: {display: false}, title: {...chartOptions.plugins.title, text: 'Month-wise Performance'}}}} 
            data={monthData} 
          />
        </div>
      </div>
    </div>
  );
};

export default PlatformWisePerformance;