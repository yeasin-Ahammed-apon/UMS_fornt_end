import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import { ErrorBoundary } from "react-error-boundary";

import MetaTag from "./Components/parts/MetaTag";
import Error404 from "./Components/Error404/Error404";

import Login from "./pages/Login/Login";
// lazy loading components go here
const Student = React.lazy(() => import("./pages/Student/Index"));

function App() {
  
  return (
    <div className="page-container">
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <MetaTag MetaTagTitle="Login" />
              <Login />
            </>
          }
        />
        <Route
          path="/student/*"
          element={
            <>
              <MetaTag MetaTagTitle="Home" />
              <Student />
            </>
          }
        />        
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
