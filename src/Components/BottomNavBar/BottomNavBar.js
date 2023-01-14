import React, { useState } from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./BottomNavBar.css";
import { tab } from "../../Data/UiData";
const BottomNavBar = () => {
  const [tabs,SetTabs] =  useState(tab);
  
  return (
    <div className="BottomNavBar">
      <nav
        className="navbar fixed-bottom bottom_nav_bar"
        role="navigation"        
      >
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`}>
                <NavLink
                  to={tab.route}
                  className="nav-link"
                  activeClassName="active"
                >
                  <div className="row d-flex flex-column align-self-center justify-content-center align-items-center bottom_nav_bar_front_and_icon">
                    <i
                      className={tab.icon}
                      style={{ fontSize: "1.4em", textAlign: "center" }}
                    ></i>
                    <div
                      className="BottombarLable"
                      style={{ fontSize: ".7em" }}
                    >
                      {tab.label}
                    </div>
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>
    </div>
  );
};

export default BottomNavBar;
