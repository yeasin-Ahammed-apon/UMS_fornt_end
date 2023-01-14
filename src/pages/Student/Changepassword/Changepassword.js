import React from "react";
import "./ChangePassword.css";
const ChangePassword = () => {
  return (
    <div className="mainDiv rounded-pill">
      <div class="cardStyle">
        <form action="" method="post" name="signupForm" id="signupForm">
          <img
            src="https://smuct.ac.bd/wp-content/uploads/2020/10/SMUCT-Logo-1-Converted.png"
            id="signupLogo"
            alt="Smuct logo"
          />
          <div className="pt-3 ps-5 pe-5">
            <div className="alert alert-danger" role="alert">
              <p className="font-weight-bold">New Password Guide:</p>
              <p>⭕️ One upper case letter (A-Z)</p>
              <hr />
              <p>⭕️ One lower case letter (a-z)</p>
              <hr />
              <p>⭕️ One numeric digit (0-9)</p>
              <hr />
              <p>⭕️ One special symbol (!@#$%^&*?_~)</p>
              <hr />
              <p>⭕️ Must be 8 characters minimum long.</p>
            </div>
          </div>

          <h2 className="formTitle">Change Password Form</h2>

          <div class="inputDiv">
            <label className="inputLabel" for="password">
              New Password
            </label>
            <input type="password" id="password" name="password" required />
          </div>

          <div className="inputDiv">
            <label className="inputLabel" for="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
          </div>

          <div className="buttonWrapper mybutton margin-left pt-3">
          <button type="submit" className="btn btn-primary ms-4">Home</button>
          <button type="submit" className="btn btn-danger">Logout</button>
          <button type="submit" class="btn btn-success me-4 w-51">Change Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
