import React from "react";
import Chats from "./Chats/Chats";
import Navbar from "./Navbar/Navbar";
import Searchbar from "./Searchbar/Searchbar";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Searchbar />
      <Chats />
    </div>
  );
};

export default SideBar;
