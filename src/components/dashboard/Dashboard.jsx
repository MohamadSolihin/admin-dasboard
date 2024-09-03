import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Card from "../card/Card";
import Reports from "../reports/Reports";
import RecentSales from "../recentSales/RecentSales";
import TopSelling from "../topselling/TopSelling";
import RecentActivity from "../recentActivity/RecentActivity";
import BudgetReport from "../budgetReport/BudgetReport";

function Dashboard() {
  const [cards, setCards] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:4000/cards")
      .then(res => res.json())
      .then(data => {
        setCards(data);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="dashboard section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              {cards &&
                cards.length > 0 &&
                cards.map(card => (
                  <div className="col-md-4" key={card._id}>
                    <Card card={card} />
                  </div>
                ))}
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <Reports />
              </div>
              <div className="col-12 mt-4">
                <RecentSales />
              </div>
              <div className="col-12 mt-4">
                <TopSelling />
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <RecentActivity />
            <BudgetReport />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
