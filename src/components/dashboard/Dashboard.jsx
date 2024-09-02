import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Card from "../card/Card";
import Reports from "../reports/Reports";
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
      <div className="row">
        {cards &&
          cards.length > 0 &&
          cards.map(idx => (
            <div className="col-3">
              <Card key={idx._id} card={idx} />
            </div>
          ))}
        <div className="col-9">
          <Reports />
        </div>
      </div>
      <div className="col-lg-4"></div>
    </section>
  );
}

export default Dashboard;
