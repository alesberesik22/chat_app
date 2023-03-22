import React from "react";
import "./MainInput.scss";
import { MdAttachFile } from "react-icons/md";
import { FcAddImage } from "react-icons/fc";

const MainInput = () => {
  return (
    <div className="main_input">
      <input className="main_input_field" placeholder="Type something..." />
      <div className="send">
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <MdAttachFile />
        </label>
        <button className="primary_button">Send</button>
      </div>
    </div>
  );
};

export default MainInput;
