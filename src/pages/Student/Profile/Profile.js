import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from 'react-bootstrap/Table';
import "./Profile.css";

const Profile = (props) => {
  // const Child = () => { // error making 
  //   throw new Error()
  // }
  return (
  // <> // error making
  // <Child/>
  // </>
    <div>            
      <div className="shadow">
        {/* profile basic info */}
        <div className="card mb-3 w-100">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
                className="img-fluid w-50 rounded-start"
                alt="ascas"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">Yeasin ahammed apon</h1>
                <h5 className="">191071051</h5>
                <p className="card-text">
                BSc in Computer Science & Engineering (Regular) (4M) (CSE)
                </p>
                <p className="card-text">20th</p>
                <a href="#/" className="btn btn-success">
                  Change the password
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow border pt-2 pb-2 bg-light">
        {/* profile all  info split in 3 tab */}
        <Tabs
          defaultActiveKey="profile"
        //   id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Personal">
            <b className="ms-2">Contact Information</b>
            <hr></hr>
          <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th>Mobile: <i className="font-weight">01681933511 <button className="btn btn-success btn-sm">Change Number</button></i></th>
          </tr>
        </thead>
        <tbody className="p" >
          <tr>
          <th>Email: <i className="font-weight">shamsalfahad3@gmail.com</i> <button className="btn btn-success btn-sm">Change E-mail</button></th>
          </tr>
          <tr>
          <th>Present Address: <i className="font-weight">HOUSE 17 , FAIDABAD , DAKKHINKHAN , DHAKA, Bangladesh</i></th> 
          </tr>
          <tr>
          <th>Permanent Address: <i className="font-weight">HOUSE 17 , FAIDABAD , DAKKHINKHAN , DHAKA, Bangladesh</i></th>
          </tr>
        </tbody>
        
      <div className="div1 p-3">
      <b>Personal Information</b>
      <hr></hr>
      <table class="table table-hover">
  <thead>
  <tr>
      <th scope="col">Full Name:<i className="font-weight"> Shams Al Fahad </i></th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Date of Birth: <i className="font-weight"> 06 January 2000 </i></th>
      
    </tr>
    <tr>
      <th scope="row">Gender: <i className="font-weight"> Male </i></th>
      
    </tr>
    <tr>
      <th scope="row">Blood: <i className="font-weight"> 	A+ </i></th>
     
    </tr>
    <tr>
      <th scope="row">Nationality: <i className="font-weight"> Bangladeshi </i></th>
     
    </tr>
    <tr>
      <th scope="row">Marital Status: <i className="font-weight"> Single </i></th>
      
    </tr>
    <tr>
      <th scope="row">Religion: <i className="font-weight"> Muslim </i></th>
      
    </tr>
  </tbody>
</table>

      </div>
      
      <div className="div2 p-3">
      <b className="ml-3">Parents Information</b>
      <hr></hr>
      <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Father's Name: <i className="font-weight"> M. A. Faruque </i></th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Father's Mobile: <i className="font-weight"> 01714497668 </i></th>
      
    </tr>
    <tr>
      <th scope="row">Mother's Name: <i className="font-weight"> Shams Sun Naher </i></th>
      
    </tr>
    <tr>
      <th scope="row">Mother's Mobile: <i className="font-weight"> 01552444638 </i></th>
     
    </tr>
    <tr>
      <th scope="row" className="text-danger">Emergency Contact Name: <i className="font-weight"> M. A. FARUQUE </i></th>
     
    </tr>
    <tr>
      <th scope="row" className="text-danger">Emergency Contact Mobile: <i className="font-weight"> 01714497668 </i></th>
      
    </tr>
    <tr>
      <th scope="row" className="text-danger">Emergency Contact Address: <i className="font-weight"> HOUSE 17 , FAIDABAD , DAKKHINKHAN , DHAKA, Bangladesh </i></th>
      
    </tr>
  </tbody>
</table>
      </div>
      </Table  >
            
            
          </Tab>
          <Tab eventKey="profile" title="Previous Education">
      
      <Table responsive="sm" striped bordered hover>
        <thead>
          <tr>
            <th>Degree Title</th>
            <th>Board</th>
            <th>Result</th>
            <th>Year</th>
            <th>Institution Name</th>
            <th>Session</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Dhaka</td>
            <td>3.67</td>
            <td>2015</td>
            <td>DHAKA MEGA CITY COLLEGE</td>
            <td>2015</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Dhaka</td>
            <td>4.42</td>
            <td>2017</td>
            <td>NAWAB HABIBULLAH MODEL HIGH SCHOOL & COLLEGE</td>
            <td>2017</td>
            <td></td>
          </tr>
        </tbody>
        
      </Table >
          </Tab>
          <Tab eventKey="contact" title="Academic">
          <Table bordered hover striped="columns" >
      <thead>
        <tr>
          <th>Program: <i className="font-weight">BSc in Computer Science & Engineering (Regular) (4M)</i></th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
        <th>Department:<i className="font-weight"> Computer Science and Engineering</i></th>
          
        </tr>
        <tr>
        <th>Core Curriculum:<i className="font-weight"> 2017 BSc in Computer Science & Engineering (Reg) Syllabus V2 (B16-25+)</i></th>
          
        </tr>
        <tr>
        <th>Admission Roll No: <i className="font-weight">191071022</i></th>
          
        </tr>
        <tr>
        <th>Date of Admitted: <i className="font-weight">January 01, 2019</i></th>
          
        </tr>
        <tr>
        <th>Admitted Semester: <i className="font-weight">Spring 2019 (4M)</i></th>
          
        </tr>
        <tr>
        <th>Graduated Semester: </th>
        </tr>
        
      </tbody>
    </Table>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
