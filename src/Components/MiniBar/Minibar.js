import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { reload, FullScreenToggler } from "../../Helpers/AllOverUsingFunctions";
import "./Minibar.css";

const Minibar = ({ HideSideBar }) => {
  const [FullScreenToggle, setFullScreenToggle] = useState(true);
  let FullScreenToggleHndaler = () =>
    FullScreenToggler(FullScreenToggle, setFullScreenToggle);
  return (
    <div className="p-1 second_list w-100 pages mb-1 shadow bg-light d-flex justify-content">
      {/*  here we will use our full srcreen functionality */}
      <div className="flex-fill align-self-center">
        <h4 className="greetings">Good morning student</h4>
      </div>
      <div>
        <ListGroup horizontal className="second_list">
          <ListGroup.Item className="second_list_square">
            <i className="bi bi-pencil-square"></i>
          </ListGroup.Item>
          <ListGroup.Item className="second_list_printer">
            <i className="bt bi bi-printer"></i>
          </ListGroup.Item>
          {FullScreenToggle ? (
            <ListGroup.Item
              onClick={FullScreenToggleHndaler}
              className="second_list_fullscreen"
            >
              <i className="bi bi-arrows-fullscreen"></i>
            </ListGroup.Item>
          ) : (
            <ListGroup.Item
              onClick={FullScreenToggleHndaler}
              className="second_list_fullscreen"
            >
              <i className="bi bi-arrows-fullscreen"></i>
            </ListGroup.Item>
          )}
          <ListGroup.Item onClick={reload} className="second_list_clockwise">
            <i className="bi bi-arrow-clockwise"></i>
          </ListGroup.Item>
          <ListGroup.Item className="second_list_expand" onClick={HideSideBar}>
            <i className="bi bi-arrows-angle-expand"></i>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default Minibar;
