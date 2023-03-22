import React from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import LoginRegisterWrapper from "../../Components/LoginRegisterWrapper/LoginRegisterWrapper";
import { FcAddImage } from "react-icons/fc";

const Register = () => {
  const navigate = useNavigate();
  return (
    <LoginRegisterWrapper>
      <h1>Chat</h1>
      <p className="sub_head">Register</p>
      <form>
        <input type={"text"} placeholder="username" />
        <input type={"email"} placeholder="email" />
        <input type={"password"} placeholder="password" />
        <input type={"file"} style={{ display: "none" }} id="file" />
        <label htmlFor="file" className="label_file">
          <FcAddImage /> Add avatar
        </label>
        <button type="submit" className="primary_button">
          Sign Up
        </button>
      </form>
      <p className="register">
        Don't have an account ? <a onClick={() => navigate("/")}>Register</a>
      </p>
    </LoginRegisterWrapper>
  );
};

export default Register;
