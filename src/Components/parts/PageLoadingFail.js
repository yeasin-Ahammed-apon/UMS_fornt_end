import React from "react";

const PageLoadingFail = () => {
  return (
    <div class="d-flex align-items-center justify-content-center vh-100 bg-white">
      <div class="text-center row">        
      <div>
        <img src="https://iems.smuct.edu.bd/assets/img/logo/smuct/InstituteLogoColorFull.png" alt="Smuct"/>
      </div>
        <div class=" col-md-12">
          <p class="fs-3">            
            <span class="text-danger">Opps!</span> some thing went wrong.
          </p>
            <p class="lead">
                Please check your internet connection  <span class="text-success fs-2">or</span> reload the page.
            </p>
          <a href="index.html" class="btn btn-primary">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageLoadingFail;
