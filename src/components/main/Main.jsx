import React from "react";
import "./main.css";
import PageTitle from "../pagetitle/PageTitle";
import Dashboard from "../dashboard/Dashboard";

function Main() {
  return (
    <main id="main" className="main">
      <PageTitle page="Dashboard" />
      <Dashboard />
    </main>
  );
}


export default Main;
