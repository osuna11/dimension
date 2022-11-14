import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const labels = ["2017", "2018", "2019", "2020", "2021", "2022"]

const options = {
    Legend: {
        postion: 'bottom'
    }
}

export const data = {
    labels,
    datasets: [
        {
            labels: "React",
            data: [32, 42, 51, 60, 51, 95],
            backgroundColor: "#2196f3",
            borderColor: "#2196f3",
        },
        {
            labels: "React",
            data: [32, 42, 51, 60, 51, 95],
            backgroundColor: "#2196f3",
            borderColor: "#2196f3",
        },
        {
            labels: "React",
            data: [32, 42, 51, 60, 51, 95],
            backgroundColor: "#2196f3",
            borderColor: "#2196f3",
        },
        {
            labels: "React",
            data: [32, 42, 51, 60, 51, 95],
            backgroundColor: "#2196f3",
            borderColor: "#2196f3",
        }
    ]
}

const LineCharts = () => {
    return <div>
        <Line options={options} data={data} />
    </div>
}

export default LineCharts;