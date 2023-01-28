import React from "react";
import LoadingBar from "react-top-loading-bar";
import "./TopLoadingBar.css";

const TopLoadingBar = ({progresBarData}) => {
  
  return (
    <div>
    <LoadingBar
        color="blue"
        progress={progresBarData}
    />       
    </div>
  );
};

export default TopLoadingBar;
