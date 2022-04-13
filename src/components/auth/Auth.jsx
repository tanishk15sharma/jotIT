import React, { useState } from "react";
import "./Auth.scss";
const Auth = () => {
  return (
    <div className="fixed-container">
      <div className="flex-cl">
        <div className="border-bottom">
          <button className=" w50 border-rg font-lg pd ">LOGIN</button>
          <button className=" w50 font-lg border-reset pd ">SIGNUP</button>
        </div>
        <input type="text" placeholder="EMAIL" className="pd mg-rl-2" />
        <input type="text" placeholder="PASSWORD" className="pd mg-rl-2" />
        <button className="pd border-none">LOGIN</button>
      </div>

      {/* <div>SINGUP</div> */}
    </div>
  );
};

export default Auth;
