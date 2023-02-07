import "./Index.css";
import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import SideBar from "../../Components/SideBar/SideBar";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Error404 from "../../Components/Error404/Error404";
import Minibar from "../../Components/MiniBar/Minibar";
import BottomNavBar from "../../Components/BottomNavBar/BottomNavBar";
import ErrorBoundaryCheck from "../../Components/ErrorBoundaryCheck/ErrorBoundaryCheck";
import { BottomNavBarDataForStudent, SideBarDataForStudent } from "../../Data/UiData";
// lazy loading components go here
const Dashboard = React.lazy(() => import("./Dashboard/Dashboard"));
const Profile = React.lazy(() => import("./Profile/Profile"));
const ChangePassword = React.lazy(() => import("./ChangePassword/ChangePassword"));
const AdmitCardsDownloads = React.lazy(() => import("./AdmitCardDownloads/AdmitCardsDownloads"));

const Index = () => {  
  const [SideBarToggle, setSideBarToggle] = useState(true);
  let HideSideBar = () => setSideBarToggle(!SideBarToggle);
  return (
    <div className="page-container">
      <NavigationBar SideBardata={SideBarDataForStudent} />
      <div className="d-flex justify-content">
      <SideBar SideBarToggle={SideBarToggle} SideBardata={SideBarDataForStudent} className="sidebar" />
        <div className="w-100 pages">
          <Minibar HideSideBar={HideSideBar} />
          <Routes>
            <Route path="/dashboard" element={<Navigate to="/student" />} />
            <Route path="/" element={
                <ErrorBoundaryCheck Page={<Dashboard />} MetaTitle="Home"/>
              } />
            <Route
              path="/profile"
              element={
                <ErrorBoundaryCheck Page={<Profile />} MetaTitle="Profile"/>
              }
            />
            <Route
              path="/change_password"
              element={
                <ErrorBoundaryCheck Page={<ChangePassword/>} MetaTitle="Change Password"/>
              }              
            />
              <Route
              path="/admit_card_download"
              element={
                <ErrorBoundaryCheck Page={<AdmitCardsDownloads />} MetaTitle="Admit Cards Downloads" />
              }              
            />             
            <Route path="/*" element={<Error404 />} />
          </Routes>
          <BottomNavBar  BottomNavBarData={BottomNavBarDataForStudent}/>
        </div>
      </div>
    </div>
  );
};

export default Index;
