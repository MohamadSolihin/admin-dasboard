import React, { useState } from "react";
import "./budgetReport.css";
import CardFilter from "../cardfilter/CardFilter";
import BudgetChart from "../budgetChart/BudgetChart";
function BudgetReport() {
  const [filterm, setfilter] = useState("Today");
  const handleFilterChange = filter => {
    setfilter(filter);
  };
  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body pb-0">
        <h5 className="card-title">
          Budget Report <span>/{filterm}</span>
        </h5>
        <BudgetChart />
      </div>
    </div>
  );
}

export default BudgetReport;
