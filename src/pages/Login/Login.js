import React from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <div className=" row justify-content-center p-4 p-sm-1 ">
      <div className="login_form_color col-12 mt-1 col-sm-6 col-md-6 mt-sm-4 p-sm-5 p-2 pt-2 pb-2 rounded shadow">
        <img
          className="login_form_image img-fluid w-25"
          src="SMUCT-01.png"
          alt=""
        />
        <h4 className="login_form_login text-center">Login</h4>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Student ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Your ID Number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Your Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Keep me login " checked />
          </Form.Group>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">
              Sign in
            </button>
          </div>
          <span className="login_form_forget_password mt-1 mt-sm-3">Forget Password ?</span>
        </Form>
      </div>
    </div>
  );
};

export default Login;
