import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = ({SideBarToggle}) => {
  let [sideBarOption, setSideBarOption] = useState([
    {
      name: "Dashboard",
      url: "/student",
      icon:"bi bi-house"

    },
    {
      name: "Profile",
      url: "/student/profile",
      icon:"bi bi-person-circle"
    },
    {
      name: "Change Password",
      url: "/student/change_password",
      icon:"bi bi-pass"
    },
    {
      name: "Acadamic",
      icon:"bi bi-book",
      subMenu: [
        {
          name: "Online Registration",
          url: "/student/online_registration",
          icon:"bi bi-send"
        },
        {
          name: "Course Registration",
          url: "/student/course_registration",
          icon:"bi bi-send"
        },
        {
          name: "Registered Courses",
          url: "/student/registered_courses",
          icon:"bi bi-send"
        },
      ],
    },
    {
      name: "Regular Exam Result",
      url: "/student/regular_exam_result",
      icon:"bi bi-file-earmark-text"
    },
    {
      name: "Transferred Course Result",
      url: "/student/transferred_course_result",
      icon:"bi bi-file-earmark-text"
    },
    {
      name: "Supplementary Result",
      url: "/student/supplementary_result",
      icon:"bi bi-file-earmark-text"
    },
    {
      name: "Admit Card Download",
      url: "/student/admit_card_download",
      icon:"bi bi-file-earmark-pdf"
    },
    {
      name: "Online Payment",
      url: "/student/online_payment",
      icon:"bi bi-cash-stack"
    },
    {
      name: "Due & Payment",
      url: "/student/due_and_payment",
      icon:"bi bi-cash-stack"
    },
  ]);

  return (
   <div className="SideBar">
     <Sidebar
     style={{
       height: "100vh" ,
       display: SideBarToggle ?'block':'none',       
       }} >
      <Menu>
        <Menu>
          {sideBarOption.map((options) => {
            if (options.hasOwnProperty("subMenu"))
              return (
                <SubMenu className="border" icon={<i className={options.icon}></i>} key={options.name} label={options.name}>
                  {options.subMenu.map((option) => (
                    <MenuItem className="border" icon={<i className={option.icon}></i>} key={option.name}> {option.name}</MenuItem>
                  ))}
                </SubMenu>
              );
            if (!options.hasOwnProperty("subMenu"))
              return (
                <Link key={options.name} className="option_design" to={options.url}>
                  <MenuItem className="border" icon={<i className={options.icon}></i>}>{options.name}</MenuItem>
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
