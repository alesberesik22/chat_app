import React from "react";
import { useNavigate } from "react-router-dom";
import LoginRegisterWrapper from "../../Components/LoginRegisterWrapper/LoginRegisterWrapper";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  return (
    <LoginRegisterWrapper>
      <h1>Chat</h1>
      <p className="sub_head">Login</p>
      <form>
        <input type={"text"} placeholder="email" />
        <input type={"password"} placeholder="password" />
        <button type="submit" className="primary_button">
          Sign In
        </button>
      </form>
      <p className="register">
        Don't have an account ?{" "}
        <a onClick={() => navigate("/register")}>Register</a>
      </p>
    </LoginRegisterWrapper>
  );
};

export default Login;
