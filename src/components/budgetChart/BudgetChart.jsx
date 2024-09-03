import React, { useEffect } from "react";
import "./budgetChart.css";
import * as echart from "echarts";
function BudgetChart() {
  useEffect(() => {
    echart.init(document.querySelector("#budgetChart")).setOption({
      legend: {
        data: ["Allocated Budget", "Actual Spending"],
      },
      radar: {
        shape: "circle",
        indicator: [
          {
            name: "Sales",
            max: 6500,
          },
          {
            name: "Administration",
            max: 1600,
          },
          {
            name: "Information Technology",
            max: 30000,
          },
          {
            name: "Customer Support",
            max: 38000,
          },
          {
            name: "Development",
            max: 52000,
          },
          {
            name: "Marketing",
            max: 25000,
          },
        ],
      },
      series: [
        {
          name: " Budget vs spending",
          type: "radar",
          data: [
            {
              value: [4300, 1000, 28000, 35000, 50000, 19000 ],
              name: "Allocated Budget",
            },
            {
              value: [5000, 1400, 30000, 38000, 55000, 22000],
              name: "Actual Spending",
            },
          ],
        },
      ],
    });
  }, []);
  return (
    <div
      id="budgetChart"
      style={{ minHeight: "400px" }}
      className="echart"></div>
  );
}

export default BudgetChart;
