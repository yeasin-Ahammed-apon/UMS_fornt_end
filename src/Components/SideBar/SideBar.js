import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./SideBar.css";
const SideBar = ({SideBarToggle,SideBardata}) => {
  let [sideBarOption, setSideBarOption] = useState(SideBardata);
  return (
   <div className="SideBar">
     <Sidebar
     style={{
       height: "100vh" ,
       paddingBottom:"100px",
       display: SideBarToggle ?'block':'none',       
       }} >
      <Menu>
        <Menu>
          {sideBarOption.map((options) => {
            if (options.hasOwnProperty("subMenu"))
              return (
                <SubMenu className="border" title={options.name} icon={<i className={options.icon}></i>} key={options.name} label={options.name}>
                  {options.subMenu.map((option) => (
                    <Link key={option.name} title={option.name} className="option_design" to={option.url}>                      
                      <MenuItem className="border ps-4" icon={<i className={option.icon}></i>} key={option.name}> {option.name}</MenuItem>
                    </Link>
                  ))}
                </SubMenu>
              );
            if (!options.hasOwnProperty("subMenu"))
              return (
                <Link key={options.name} className="option_design" to={options.url}>
                  <MenuItem className="border" title={options.name} icon={<i className={options.icon}></i>}>{options.name}</MenuItem>
                </Link>
              );
          })}
        </Menu>
      </Menu>
    </Sidebar>
   </div>
  );
};

export default SideBar;
