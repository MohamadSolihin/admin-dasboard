import React, { useState, useEffect } from "react";
import './recentSales.css'
import CardFilter from "../cardfilter/CardFilter";
import RecentSalesTable from "../recentSalesTable/RecentSalesTable";
function RecentSales() {
  const [items, setItems] = useState();
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = filter => {
    setFilter(filter);
  };

  const fetchData = () => {
    fetch("http://localhost:4000/recentsales")
      .then(res => res.json())
      .then(data => {
        setItems(data);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, [filter]);

  return (
    <div className="card recent-sales overflow-auto">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body">
        <h5 className="card-title">
          Recent Sales <span>/{filter}</span>
        </h5>
        <RecentSalesTable items={items} />
      </div>
    </div>
  );
}
export default RecentSales;
