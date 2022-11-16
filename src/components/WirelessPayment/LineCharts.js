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
            label: "bitcoin",
            data: [12, 12, 13, 14, 15, 16],
            backgroundColor: "#2196f3",
            borderColor: "#2196f3",
        },
        {
            label: "etheroun",
            data: [15, 14, 13, 12, 11, 10],
            backgroundColor: "#FF2D00",
            borderColor: "#FF2D00",
        },
        {
            label: "DogCoin",
            data: [1, 2, 3, 4, 5, 6],
            backgroundColor: "#78FF00",
            borderColor: "#78FF00",
        },
        {
            label: "DollarCoin",
            data: [7 , 8, 9 ,10, 11, 12],
            backgroundColor: "#00F3FF",
            borderColor: "#00F3FF",
        }
    ]
}

const LineCharts = () => {
    return <div>
        <Line options={options} data={data} />
    </div>
}

export default LineCharts;