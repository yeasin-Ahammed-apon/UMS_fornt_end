import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useProSidebar } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import { SideBarData } from "../../Data/UiData";
import "./NavigationBar.css";
import ProfileDropDown from "./ProfileDropDown";

const NavigationBar = () => {
  const [NavigationBarData, SetNavigationBarData] = useState(SideBarData);
  const { collapseSidebar } = useProSidebar();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <ProfileDropDown ProfileDropDownClassName="profile_dropdown_for_mobile" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className="SideBarCollapseButton"
              onClick={() => collapseSidebar()}
            >
              <i className="bi bi-list fs-5"></i>
            </Nav.Link>
            {NavigationBarData.map((options) => {
              if (options.hasOwnProperty("subMenu"))
                return (
                  <NavDropdown
                    className="NavBarOptions"
                    id="nav-dropdown-dark-example"
                    key={options.name}
                    title={options.name}
                    menuVariant="dark"
                  >
                    {options.subMenu.map((option) => (
                      <li className="nav-item" key={option.name}>
                        <NavLink className="nav-link" to={option.url}>
                          <i className={option.icon}></i>
                          {option.name}
                        </NavLink>
                      </li>
                      // </>
                    ))}
                  </NavDropdown>
                );
              if (!options.hasOwnProperty("subMenu"))
                return (
                  <>
                    <li className="nav-item NavBarOptions" key={options.name}>
                      <NavLink className="nav-link" to={options.url}>
                        <i className={options.icon}></i>
                        {options.name}
                      </NavLink>
                    </li>
                  </>
                );
            })}
          </Nav>
          <ProfileDropDown ProfileDropDownClassName="profile_dropdown_for_pc" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
