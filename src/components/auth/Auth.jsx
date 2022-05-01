import React, { useState } from "react";
import "./Auth.scss";
import { Login } from "./Login";
import { Signup } from "./Signup";
const Auth = () => {
  const [toggleAuth, setToggleAuth] = useState(true);

  return (
    <div className="fixed-container">
      <div className="auth-box">
        {toggleAuth ? (
          <Login toggleAuth={setToggleAuth} />
        ) : (
          <Signup toggleAuth={setToggleAuth} />
        )}
      </div>
    </div>
  );
};

export default Auth;
