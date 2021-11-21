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

const GroupedBar2 = (data2) => {
  let data = {
    labels: ["CO2"],
    datasets: [
      {
        label: "Food&Drink",
        data: [data2.food],
        backgroundColor: "rgb(255, 99, 132)",
        stack: "Stack 0",
      },
      {
        label: "Pharmaceuticals",
        data: [data2.pharmaceuticals],
        backgroundColor: "rgb(54, 162, 235)",
        stack: "Stack 1",
      },
      {
        label: "Technical Devices",
        data: [data2.techDevices],
        backgroundColor: "rgb(75, 192, 192)",
        stack: "Stack 2",
      },
      {
        label: "Furniture&Books",
        data: [data2.furniture_books],
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

export default GroupedBar2;
