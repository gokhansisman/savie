import React from "react";
import { Bar } from "react-chartjs-2";

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const GroupedBar = (data2) => {
  let data = {
    labels: ["CO2"],
    datasets: [
      {
        label: "# Nutrition",
        data: [data2.nutrition],
        backgroundColor: "rgb(255, 99, 132)",
        stack: "Stack 0",
      },
      {
        label: "# Waste",
        data: [data2.waste],
        backgroundColor: "rgb(54, 162, 235)",
        stack: "Stack 1",
      },
      {
        label: "# Energy",
        data: [data2.energy],
        backgroundColor: "rgb(75, 192, 192)",
        stack: "Stack 2",
      },
      {
        label: "# Vehicle",
        data: [data2.vehicle],
        backgroundColor: "rgb(320, 20, 192)",
        stack: "Stack 3",
      },
    ],
  };
  return (
    <>
      <div className="header"></div>
      <Bar data={data} options={options} />
    </>
  );
};

export default GroupedBar;
