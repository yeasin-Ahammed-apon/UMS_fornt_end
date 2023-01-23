import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useProSidebar } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import ProfileDropDown from "./ProfileDropDown";

const NavigationBar = ({SideBardata}) => {
  const [NavigationBarData, SetNavigationBarData] = useState(SideBardata);
  const { collapseSidebar } = useProSidebar();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">      
        
        <img 
        src="/smuct.png"
         className="img-fluid ps-2"
          alt="SMUCT"
          style={{ width:"100px" }}
          />
        
        <Navbar.Toggle className="me-auto" aria-controls="basic-navbar-nav" />
        <ProfileDropDown className="me-auto" ProfileDropDownClassName="profile_dropdown_for_mobile" />
        
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
                    title={" "+options.name}
                    menuVariant="dark"
                    style={{ paddingLeft:"10px" }}
                  >
                    {options.subMenu.map((option) => (
                      <li className="nav-item" 
                      key={option.name}
                      style={{ paddingLeft:"10px" }}
                      >
                        <NavLink className="nav-link" to={option.url}>
                          <i className={option.icon}></i>
                          {" "+option.name}
                        </NavLink>
                      </li>
                      // </>
                    ))}
                  </NavDropdown>
                );
              if (!options.hasOwnProperty("subMenu"))
                return (
                  <>
                    <li className="nav-item NavBarOptions" key={options.name}
                    style={{ paddingLeft:"10px" }}
                    >
                      <NavLink className="nav-link" to={options.url}>
                        <i className={options.icon}></i>  {" "+options.name}
                      </NavLink>
                    </li>
                  </>
                );
            })}
          </Nav>          
          <ProfileDropDown className="ms-auto" ProfileDropDownClassName="profile_dropdown_for_pc"/>
        </Navbar.Collapse>
      
    </Navbar>
  );
};

export default NavigationBar;
