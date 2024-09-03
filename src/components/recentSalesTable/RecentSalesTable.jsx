import React from "react";
import "./recentSalesTable.css";
function RecentSalesTable({ items }) {
  const handleStatus = status => {
    switch (status) {
      case "Approved":
        return "success";
      case "Pending":
        return "warning";
      case "Rejected":
        return "danger";
      default:
        return "success";
    }
  }
  return (
    <table className="table table-borderless datatable">
      <thead className="table-light">
        <tr className="mb-5 ">
          <th scope="col">#</th>
          <th scope="col">Customer</th>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      {items &&
        items.length > 0 &&
        items.map(item => (
          <tr key={item._id}>
            <th scope="row" className="mb-5">
              <a href="/">{item.number}</a>
            </th>
            <td className="">{item.customer}</td>
            <td>
              <a href="/" className="text-primary">
                {item.product}
              </a>
            </td>
            <td>${item.price.toFixed(2)}</td>
            <td>
              <span className={`badge bg-${handleStatus(item.status)}`}>
                {item.status}
              </span>
            </td>
          </tr>
        ))}
    </table>
  );
}

export default RecentSalesTable;
