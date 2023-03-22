import React from "react";
import Message from "../Message/Message";
import "./Messages.scss";

const Messages = () => {
  return (
    <div className="messages">
      <Message type="reciever" message="reciever_message" />
      <Message type="sender" message="sender_message" />
      <Message type="reciever" message="reciever_message" />
      <Message type="sender" message="sender_message" />
      <Message type="reciever" message="reciever_message" />
      <Message type="sender" message="sender_message" />
      <Message type="reciever" message="reciever_message" />
      <Message type="sender" message="sender_message" />
    </div>
  );
};

export default Messages;
