import React, { useState } from "react";
import Chart from "react-apexcharts";

function ReportsCharts() {
  const [dataCharts, setDataCharts] = useState({
    series: [
      {
        name: "Sales",
        data: [10, 41, 35, 51, 49, 62, 69],
      },
      {
        name: "Revenue",
        data: [12, 23, 18, 32, 26, 40, 38],
      },
      {
        name: "Customers",
        data: [5, 12, 11, 19, 15, 22, 24],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      colors: ["#4154f1", "#2eca6a", "#ff771d"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.8,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
        colors: ["#4154f1", "#2eca6a", "#ff771d"],
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2021-01-19T00:00:00Z",
          "2021-01-19T01:00:00Z",
          "2021-01-19T02:00:00Z",
          "2021-01-19T03:00:00Z",
          "2021-01-19T04:00:00Z",
          "2021-01-19T05:00:00Z",
          "2021-01-19T06:00:00Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yyyy HH:mm",
        },
      },
    },
  });

  return (
    <Chart
      options={dataCharts.options}
      series={dataCharts.series}
      type={dataCharts.options.chart.type}
      height={dataCharts.options.chart.height}
    />
  );
}

export default ReportsCharts;
