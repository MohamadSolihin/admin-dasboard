import React, { useEffect } from "react";
import "./webTrafficChart.css";
import * as echarts from "echarts";
function WebTrafficChart() {
  useEffect(() => {
    echarts.init(document.querySelector("#trafficChart")).setOption({
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlop: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "18",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 1048,
              name: "Search Engine",
            },
            {
              value: 735,
              name: "Direct ",
            },
            {
              value: 558,
              name: "Email",
            },
            {
              value: 484,
              name: "Union",
            },
            {
              value: 300,
              name: "Video Ads",
            },
          ],
        },
      ],
    });
  }, []);
  return (
    <div
      id="trafficChart"
      style={{ minHeight: "400px" }}
      className="echart"></div>
  );
}

export default WebTrafficChart;
