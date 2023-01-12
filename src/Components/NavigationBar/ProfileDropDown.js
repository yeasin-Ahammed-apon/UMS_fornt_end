import React from 'react';
import NavDropdown from "react-bootstrap/NavDropdown";

const ProfileDropDown = ({ProfileDropDownClassName}) => {
    return (
        <div>
            <NavDropdown className={ProfileDropDownClassName}
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
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </div>
    );
};

export default ProfileDropDown;