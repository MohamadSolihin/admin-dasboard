import React, { useEffect, useState } from "react";
import "./topSelling.css";
import CardFilter from "../cardfilter/CardFilter";
import TopSellingItem from "../topSellingItem/TopSellingItem";
function TopSelling() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = filter => {
    setFilter(filter);
  };

  const fetchData = () => {
    fetch("http://localhost:4000/topselling")
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
    <div className="card top-selling overflow-auto">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body pb-0">
        <h5 className="card-title">
          Top Selling <span>/{filter}</span>
        </h5>

        <table className="table table-borderless">
          <thead className="table-light">
            <tr>
              <th scope="col">Preview</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Sold</th>
              <th scope="col">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.length > 0 &&
              items.map(item => <TopSellingItem key={item._id} item={item} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopSelling;
