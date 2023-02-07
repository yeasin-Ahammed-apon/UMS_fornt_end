import "./Index.css";
import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import SideBar from "../../Components/SideBar/SideBar";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Error404 from "../../Components/Error404/Error404";
import Minibar from "../../Components/MiniBar/Minibar";
import BottomNavBar from "../../Components/BottomNavBar/BottomNavBar";
import {BottomNavBarDataForAdmin,SideBarDataForAdmin} from "../../Data/UiData";
import ErrorBoundaryCheck from "../../Components/ErrorBoundaryCheck/ErrorBoundaryCheck";


const Dashboard = React.lazy(() => import("./Dashboard/Dashboard"));
const AllMember = React.lazy(() => import("./AllMember/AllMember"));

// lazy loading components go here

const Index = () => {
  const [SideBarToggle, setSideBarToggle] = useState(true);
  let HideSideBar = () => setSideBarToggle(!SideBarToggle);

  return (
    <div className="page-container">
      
      <NavigationBar SideBardata={SideBarDataForAdmin} />
      <div className="d-flex justify-content">
        <SideBar
          SideBarToggle={SideBarToggle}
          SideBardata={SideBarDataForAdmin}
          className="sidebar"
        />
        <div className="w-100 pages">
          <Minibar HideSideBar={HideSideBar} />
          <Routes>
            <Route path="/dashboard" element={<Navigate to="/admin" />} />
            <Route
              path="/"
              element={                
                <ErrorBoundaryCheck Page={<Dashboard/>} MetaTitle="Home"/>
              }
            />
            <Route
              path="/all_member"
              element={                
                <ErrorBoundaryCheck Page={<AllMember/>} MetaTitle="All Member"/>
              }
            />
            <Route path="/*" element={<Error404 />} />
          </Routes>          
          <BottomNavBar BottomNavBarData={BottomNavBarDataForAdmin} />
        </div>
      </div>
      
    </div>
  );
};

export default Index;
