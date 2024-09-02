import React from "react";
import "./logo.css";

function Logo() {
  const handleToggleSidebar = () => {
    document.body.classList.toggle("toggle-sidebar");
  };
  return (
    <div className="d-flex algin-items justify-content-between">
      <a href="/" className="logo d-flex algin-items-center">
        <span className="d-none d-lg-block">AdminDashboard</span>
      </a>
      <i
        className="bi bi-list toggle-sidebar-btn"
        onClick={handleToggleSidebar}></i>
    </div>
  );
}

export default Logo;
