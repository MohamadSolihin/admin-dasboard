import React, { useState } from "react";
import CardFilter from "../cardfilter/CardFilter";
import ReportsCharts from "../reportsCharts/ReportsCharts";

function Reports() {
  const [filter, setFilter] = useState("Today");
  const handleFillterChange = filter => {
    setFilter(filter);
  };
  return (
    <div className="card">
      <CardFilter filterChange={handleFillterChange} />
      <div className="card-body">
        <h5 className="card-titel">
          Reports <span>/{filter}</span>
        </h5>
        <ReportsCharts />
      </div>
    </div>
  );
}

export default Reports;
