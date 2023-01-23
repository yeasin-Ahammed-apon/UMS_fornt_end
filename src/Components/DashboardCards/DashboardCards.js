import React, { useState } from "react";
import "./DashboardCards.css";
const DashboardCards = ({DashboardData}) => {
  
  let [CardData, SetCardData] = useState(DashboardData);
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
