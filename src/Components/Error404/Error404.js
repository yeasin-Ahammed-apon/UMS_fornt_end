import React from "react";

const Error404 = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-white">      
      <div className="text-center row">
        <div>
          <img
            src="https://iems.smuct.edu.bd/assets/img/logo/smuct/InstituteLogoColorFull.png"
            alt="Smuct"
          />
        </div>
        <div className=" col-md-12">
          <p className="fs-3">
          
            <span className="text-danger">Opps!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
          <a href="index.html" className="btn btn-primary">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error404;
