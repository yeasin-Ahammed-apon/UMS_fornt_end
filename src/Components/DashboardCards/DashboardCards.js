import React, { useState } from "react";
import "./DashboardCards.css";
const DashboardCards = () => {
  let data = [
    {
      name: "Check Due Payments",
      url: "/payments",
      frontColor: "white",
      BackGroundColor: "#c90e00",
      icon: "bi bi-credit-card",
    },
    {
      name: "Semester Admit Card",
      url: "/admit_card",
      frontColor: "white",
      BackGroundColor: "#a89803",
      icon: "bi bi-file-pdf",
    },
    {
      name: "Semester Result",
      url: "/semester_result",
      frontColor: "white",
      BackGroundColor: "#379e20",
      icon: "bi bi-file-earmark-spreadsheet",
    },
    {
      name: "Supplementary Result",
      url: "/supplementary_result",
      frontColor: "white",
      BackGroundColor: "#0c8779",
      icon: "bi bi-file-earmark-spreadsheet",
    },
    {
      name: "Registered Courses",
      url: "/registered_courses",
      frontColor: "white",
      BackGroundColor: "#961ca6",
      icon: "bi bi-card-list",
    },
    {
      name: "Online Registration",
      url: "/online_registration",
      frontColor: "white",
      BackGroundColor: "#1b1b9e",
      icon: "bi bi-file-earmark-medical",
    },
    {
      name: "Onlin Payment",
      url: "/admit_card",
      frontColor: "white",
      BackGroundColor: "#a1183f",
      icon: "bi bi-currency-dollar",
    },
  ];
  let [CardData, SetCardData] = useState(data);
  return (
    <div className="dashboard_cards">
      <div className="row_for_parent">
        {CardData.map((cardInfo) => {
          return (            
              <a href="/" key={cardInfo.name} className="row_for_child  rounded">
                <div
                  className="rounded  dashboard_card_icon"
                  style={{
                    backgroundColor: cardInfo.BackGroundColor,
                    color: cardInfo.frontColor,
                  }}
                >
                  <i className={cardInfo.icon}></i>
                </div>
                <div className="">{cardInfo.name}</div>
              </a>            
          );
        })}
      </div>
    </div>
  );
};

export default DashboardCards;
