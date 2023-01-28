import React, { useState } from "react";
import { url } from "../../Data/ApiLink";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { HelperForSetTopbardata } from "../../Helpers/TopBarDataLoadingFun";




const Login = () => {  
  HelperForSetTopbardata(100);  
  const Navigate = useNavigate();
  const [UserEmail,setUserEmail] =  useState("")
  const [UserPassword,setUserPassword] =  useState("")
  const [UserRemember,setUserRemember] =  useState(true)
  let handeLoginFrom = ( event) =>{
    event.preventDefault();
    const {userEmail,userPassword} = event.target;
     setUserEmail(userEmail.value)
     setUserPassword(userPassword.value)      
     async function checkForUser(email,password,remember){
      await axios.post(`${url}/login`, {
        email,
        password,
        remember,
      })
      .then(function (res) {        
        if (res.data.status === 200) {          
          Navigate('/admin')
        }
        else{          
        }
      })
     }
     checkForUser(UserEmail,UserPassword,UserRemember);     
  }
  return (
    <div className=" row justify-content-center p-4 p-sm-1 ">      
      <div className="login_form_color col-12 mt-1 col-sm-6 col-md-6 mt-sm-4 p-sm-5 p-2 pt-2 pb-2 rounded shadow">
        <img
          className="login_form_image img-fluid w-25"
          src="SMUCT-01.png"
          alt=""
        />
        <h4 className="login_form_login text-center">User Login</h4>
        <Form onSubmit={handeLoginFrom} >
          <Form.Group className="mb-3">
            <Form.Label>User ID</Form.Label>
            <Form.Control type="email" name="userEmail"  placeholder="Enter Your mail" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="userPassword" placeholder="Enter Your Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" name="userRemember" label="Keep me login " 
            defaultChecked={UserRemember}
            onChange={() => setUserRemember(!UserRemember)}
             />
          </Form.Group>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
          <span className="login_form_forget_password mt-1 mt-sm-3">Forget Password ?</span>
        </Form>
      </div>
    </div>
  );
};

export default Login;
