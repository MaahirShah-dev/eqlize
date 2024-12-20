"use client"; // Needed for Chart.js in Next.js
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register required Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function DashboardLineChart() {
  // Basic chart data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: [12000, 14000, 11000, 16000, 18000, 15000, 13000, 20000, 17000, 14000, 19000, 21000],
        borderColor: "green", // Line color set to green
        backgroundColor: "rgba(0, 255, 0, 0.1)", // Light green background fill
        borderWidth: 2,
        tension: 0.4, // Smooth curve
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Completely remove the legend
      },
    },
    scales: {
      y: { beginAtZero: true }, // Start Y-axis at 0
    },
  };

  return (
    <div className="w-full h-[230px] flex items-center justify-center">
      <Line data={data} options={options} />
    </div>
  );
}
