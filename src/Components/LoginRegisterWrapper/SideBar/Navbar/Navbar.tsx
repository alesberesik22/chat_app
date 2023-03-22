import React from "react";
import "./Navbar.scss";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar_header">Chat</h1>
      <div className="navbar_client_data">
        <RxAvatar />
        <p>Ales Beresik</p>
        <button className="primary_button small">Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
