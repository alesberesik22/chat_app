import React from "react";
import "./Chat.scss";
import { AiOutlineVideoCamera, AiOutlineUserAdd } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import Messages from "../../Main/Messages/Messages";
import MainInput from "../../Main/MainInput/MainInput";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat_info">
        <span>Ales</span>
        <div className="chat_images">
          <AiOutlineVideoCamera />
          <AiOutlineUserAdd />
          <FiMoreHorizontal />
        </div>
      </div>
      <Messages />
      <MainInput />
    </div>
  );
};

export default Chat;
