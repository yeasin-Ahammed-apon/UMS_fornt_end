import "./Index.css";
import React, { Suspense, useState} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { ErrorBoundary } from "react-error-boundary";

import SideBar from "../../Components/SideBar/SideBar";
import PageLoadingFail from "../../Components/parts/PageLoadingFail";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import MetaTag from "../../Components/parts/MetaTag";
import Error404 from "../../Components/Error404/Error404";
import Minibar from "../../Components/MiniBar/Minibar";
import Dashboard from "./Dashboard/Dashboard";
import BottomNavBar from "../../Components/BottomNavBar/BottomNavBar";
import { BottomNavBarDataForAdmin, SideBarDataForAdmin } from "../../Data/UiData";






// lazy loading components go here


const Index = () => {

  const [SideBarToggle, setSideBarToggle] = useState(true);
  let HideSideBar = () => setSideBarToggle(!SideBarToggle);    
  
  
  return (
    <div className="page-container">
      <NavigationBar SideBardata={SideBarDataForAdmin} />      
      <div className="d-flex justify-content">
        <SideBar SideBarToggle={SideBarToggle} SideBardata={SideBarDataForAdmin} className="sidebar" />
        <div className="w-100 pages">
          <Minibar HideSideBar={HideSideBar} />
          <Routes>            
          <Route path="/dashboard" element={<Navigate to="/admin" />} />                       
            <Route
              path="/"
              element={
                <ErrorBoundary fallback={<PageLoadingFail />}>
                  <Suspense
                    fallback={
                      <>
                        <SkeletonTheme
                          baseColor="#9298a8"
                          highlightColor="#444"
                        >
                          <div className="row">
                            <div className="col-4">
                              <Skeleton count={5} />
                            </div>
                            <div className="col-8">
                              <Skeleton count={5} />
                            </div>
                          </div>

                          <div>
                            <Skeleton count={50} />
                          </div>
                        </SkeletonTheme>
                      </>
                    }
                  >                    
                    <MetaTag MetaTagTitle="Home" />
                    <Dashboard/>
                  </Suspense>
                </ErrorBoundary>
              }
            />             
            <Route path="/*" element={<Error404 />} />
          </Routes>
          <BottomNavBar  BottomNavBarData={BottomNavBarDataForAdmin}/>
        </div>
      </div>
    </div>
  );
};

export default Index;
