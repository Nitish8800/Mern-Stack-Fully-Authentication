import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Organic", "Sponsored", "Organic", "Sponsored", "Organic"],
  previousDate: {
    label: "08/10/2019 - 09/30/2019",
    dataSet: [200000, 150000, 200000, 150000, 300000],
  },
  currentDate: {
    label: "10/01/2019 - 11/20/2019",
    dataSet: [300000, 225000, 300000, 225000, 400000],
  },
};

export default function Graphs() {
  return (
    <>
      <Bar
        pointStyle="star"
        data={{
          labels: data.labels,
          responsive: true,
          offset: true,
          datasets: [
            {
              label: "Mobile",
              pointStyle: "rectRounded",
              backgroundColor: "#1497FF",
              barThickness: 20,
              categoryPercentage: 1,
              data: data.previousDate.dataSet, //From API
            },
            {
              label: "Desktop",
              backgroundColor: "#6ED3FF",
              barThickness: 20,
              categoryPercentage: 1,
              pointStyle: "triangle",
              data: data.currentDate.dataSet, //From API
            },
          ],
        }}
        height={300}
        options={{
          // offsetGridLines: true,
          // drawTicks: true,
          // layout: {
          //   padding: {
          //     top: 30,
          //     right: 40,
          //     bottom: 40,
          //   },
          // },
          // legend: {
          //   display: true,
          //   position: "right",
          //   align: "start",
          //   labels: {
          //     usePointStyle: true,
          //   },
          // },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                stacked: true,
                ticks: {
                  padding: 5,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                stacked: false,
                gridLines: {
                  drawBorder: false,
                },
                ticks: {
                  beginAtZero: true,
                  maxTicksLimit: 6,
                  padding: 20,
                  callback(n) {
                    if (n < 1e3) return n;
                    if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
                  },
                },
              },
            ],
          },
        }}
      />
    </>
  );
}
