import React from "react";
import "./LoginRegisterWrapper.scss";

interface Props {
  children: React.ReactNode;
}

const LoginRegisterWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="login_register">
      <div className="login_register_content">{children}</div>
    </div>
  );
};

export default LoginRegisterWrapper;
