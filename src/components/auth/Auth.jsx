import React, { useState } from "react";
import "./Auth.scss";
const Auth = () => {
  return (
    <div className="fixed-container">
      <div className="flex-cl">
        <div className="txt-center">
          <span className="border-btn font-lg pd-right-1 ">LOGIN</span>
          <span className="font-lg pd-left-1">SIGNUP</span>
        </div>
        <input type="text" placeholder="EMAIL" />
        <input type="text" placeholder="PASSWORD" />
        <button>LOGIN</button>
      </div>
      {/* <div>SINGUP</div> */}
    </div>
  );
};

export default Auth;
