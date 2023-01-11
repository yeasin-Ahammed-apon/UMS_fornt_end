import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./BottomNavBar.css";

const BottomNavBar = () => {
  const tabs = [
    {
      route: "?student/payments",
      icon: "bi bi-credit-card",
      label: "Payments",
    },
    {
      route: "/student/admit",
      icon: "bi bi-file-pdf",
      label: "Admit_Card",
    },
    {
      route: "/student/",
      icon: "bi bi-house",
      label: "Home",
    },
    {
      route: "/search/result/",
      icon: "bi bi-file-earmark-spreadsheet",
      label: "Result",
    },
    {
      route: "/student/profile",
      icon: "bi bi-person-circle",
      label: "Profile",
    },
  ];
  return (
    <div className="BottomNavBar">
      <nav
        className="navbar fixed-bottom"
        role="navigation"
        style={{ backgroundColor: "black" }}
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
                  <div className="row d-flex flex-column justify-content-center align-items-center">
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
