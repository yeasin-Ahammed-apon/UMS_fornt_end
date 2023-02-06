import "./App.css";
import React, {useState } from "react";
import { Navigate, Route, Routes  } from "react-router-dom";

import Error404 from "./Components/Error404/Error404";
import TopLoadingBar from "./Components/TopLoadingBar/TopLoadingBar";

// avoiding lazy loding for this pages
import Login from "./pages/Login/Login";
import Student from "./pages/Student/Index";
import Admin from "./pages/Admin/Index";
import MetaTag from "./Components/MetaTag/MetaTag";

export const Topbarloaderdata = React.createContext();
function App() {
  const [topBarData, setTopBarData] = useState(100);  
  return (
    <Topbarloaderdata.Provider value={setTopBarData}>
      <div className="page-container">
        <TopLoadingBar progresBarData={topBarData} />
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
          <Route
            path="/admin/*"
            element={
              <>
                <MetaTag MetaTagTitle="Home" />
                <Admin />
              </>
            }
          />
          <Route path="/" element={<Navigate to='/login' />} />{/*remove after use  */}
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>
    </Topbarloaderdata.Provider>
  );
}

export default App;
