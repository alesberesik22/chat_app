import React from "react";
import "./Message.scss";
import { RxAvatar } from "react-icons/rx";

interface Props {
  type: string;
  message: string;
}

const Message: React.FC<Props> = ({ type, message }) => {
  return (
    <div className="message">
      <div className={`message_container ${type}`}>
        <div className="message_avatar">
          <RxAvatar />
          <p>Just now</p>
        </div>
        <div className={`message_content ${message}`}>
          <span>Some text inserted here</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
