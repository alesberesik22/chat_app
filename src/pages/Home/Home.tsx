import React from "react";
import Chat from "../../Components/LoginRegisterWrapper/SideBar/Chat/Chat";
import SideBar from "../../Components/LoginRegisterWrapper/SideBar/SideBar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <Chat />
    </div>
  );
};

export default Home;
