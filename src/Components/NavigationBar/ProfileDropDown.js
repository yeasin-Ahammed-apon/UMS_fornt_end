import React from 'react';
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';

const ProfileDropDown = ({ProfileDropDownClassName}) => {
    return (
        
            <NavDropdown className={ProfileDropDownClassName +" flex-shrink-1"}
            title={
              <div className="pull-left">
                <img
                  className="thumbnail-image rounded-circle shadow"
                  src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
                  alt="user pic"
                  style={{ height: "40px" }}
                />
                <span
                  className="fs-5 text-light"
                  style={{ marginLeft: "15px", marginRight: "15px" }}
                >
                  apon
                </span>
              </div>
            }
            id="basic-nav-dropdown"
          >
            <Link className='dropdown-item' to='/student/profile'>Profile</Link>            
            <Link className='dropdown-item' to='/student/settings'>Settings</Link>            
            <NavDropdown.Divider />
            <Link className='dropdown-item' to='/student/logout'>Logout</Link>            
            
          </NavDropdown>        
    );
};

export default ProfileDropDown;