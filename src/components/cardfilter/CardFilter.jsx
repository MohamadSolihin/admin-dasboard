import React from "react";
import './cardFilter.css'
function CardFilter({filterChange}) {
  return (
    <div className="filter">
      <a href="/" className="icon" data-bs-toggle="dropdown">
        <i className="bi bi-three-dots"></i>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
        <li className="dropdown-header text-start">
          <h6>Filter</h6>
        </li>
        <li>
          <a
            href="/"
            className="dropdown-item"
            onClick={() => filterChange("Today")}>
            Today
          </a>
        </li>
        <li>
          <a
            href="/"
            className="dropdown-item"
            onClick={() => filterChange("This Month")}>
            This Month
          </a>
        </li>
        <li>
          <a
            href="/"
            className="dropdown-item"
            onClick={() => filterChange("This Year")}>
            This Year
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CardFilter;
