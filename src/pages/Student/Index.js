import "./Index.css";
import React, { Suspense, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { ErrorBoundary } from "react-error-boundary";

import SideBar from "../../Components/parts/Sidebar";
import PageLoadingFail from "../../Components/parts/PageLoadingFail";
import Navigationbar from "../../Components/parts/Navigationbar";
import MetaTag from "../../Components/parts/MetaTag";
import Error404 from "../../Components/Error404/Error404";
import Minibar from "../../Components/MiniBar/Minibar";
import Dashboard from "./Dashboard/Dashboard";

// lazy loading components go here
const Profile = React.lazy(() => import("./Profile/Profile"));

const Index = () => {
  const [SideBarToggle, setSideBarToggle] = useState(true);
  let HideSideBar = () => setSideBarToggle(!SideBarToggle);
  return (
    <div className="page-container">
      <Navigationbar />
      <div className="d-flex justify-content">
        <SideBar SideBarToggle={SideBarToggle} className="sidebar" />
        <div className="w-100 pages">
          <Minibar HideSideBar={HideSideBar} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Navigate to="/student" />} />
            <Route
              path="/profile"
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
                    <MetaTag MetaTagTitle="Profile" />
                    <Profile />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Index;