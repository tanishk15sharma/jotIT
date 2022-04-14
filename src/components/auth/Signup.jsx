import React from "react";

const Signup = ({ toggleAuth }) => {
  return (
    <div className="flex-cl">
      <div className="border-bottom">
        <button
          className=" w50 border-reset font-lg pd"
          onClick={() => toggleAuth(true)}
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
  );
};

export { Signup };
