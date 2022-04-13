import React, { useState } from "react";
import "./Auth.scss";
const Auth = () => {
  const [toggleAuth, setToggleAuth] = useState(true);
  return (
    <div className="fixed-container">
      {toggleAuth ? (
        <div className="flex-cl h30">
          <div className="border-bottom">
            <button className=" w50 border-rg font-lg pd">LOG IN</button>
            <button
              className=" w50 font-lg border-reset pd"
              onClick={() => setToggleAuth(false)}
            >
              SIGNUP
            </button>
          </div>
          <input
            type="text"
            placeholder="EMAIL"
            className="pd mg-rl-2 mg-top-1"
          />
          <input
            type="text"
            placeholder="PASSWORD"
            className="pd mg-rl-2
            mg-bottom-1
          "
          />
          <button className="pd border-none">LOG IN</button>
        </div>
      ) : (
        <div className="flex-cl">
          <div className="border-bottom">
            <button
              className=" w50 border-reset font-lg pd"
              onClick={() => setToggleAuth(true)}
            >
              LOGIN
            </button>
            <button className=" w50 font-lg border-rg pd">SIGNUP</button>
          </div>
          <input type="text" placeholder="FIRST NAME" className="pd mg-rl-2" />
          <input type="text" placeholder="LAST NAME" className="pd mg-rl-2" />

          <input type="text" placeholder="EMAIL" className="pd mg-rl-2" />
          <input type="text" placeholder="PASSWORD" className="pd mg-rl-2" />
          <button className="pd border-none">SIGN IN</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
