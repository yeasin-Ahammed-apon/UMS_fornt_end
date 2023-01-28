import React from "react";

const PageLoadingFail = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-white">
      <div className="text-center row">        
      <div>
        <img src="https://iems.smuct.edu.bd/assets/img/logo/smuct/InstituteLogoColorFull.png" alt="Smuct"/>
      </div>
        <div className=" col-md-12">
          <p className="fs-3">            
            <span className="text-danger">Opps!</span> some thing went wrong.
          </p>
            <p className="lead">
                Please check your internet connection  <span className="text-success fs-2">or</span> reload the page.
            </p>
          <a href="index.html" className="btn btn-primary">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageLoadingFail;
