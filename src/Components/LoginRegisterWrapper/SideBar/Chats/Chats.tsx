import React from "react";
import "./Chats.scss";
import { RxAvatar } from "react-icons/rx";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <RxAvatar />
        <div className="userChat_info">
          <span className="user_name">Ales</span>
          <span className="user_last_text">Text</span>
        </div>
      </div>
    </div>
  );
};

export default Chats;
