import React, { useState } from "react";

const Login = ({ toggleAuth }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const loginInputHandler = (e) => {
    setLogin((data) => ({ ...data, [e.traget.name]: e.traget.value }));
  };

  return (
    <>
      <div className="flex-cl h30">
        <div className="border-bottom">
          <button className=" w50 border-rg font-lg pd">LOG IN</button>
          <button
            className=" w50 font-lg border-reset pd"
            onClick={() => toggleAuth(false)}
          >
            SIGNUP
          </button>
        </div>
        <input
          type="text"
          placeholder="EMAIL"
          name="email"
          className="pd mg-rl-2 mg-top-1"
          onChange={(e) => loginInputHandler(e)}
          value={login.email}
        />
        <input
          type="text"
          name="password"
          placeholder="PASSWORD"
          className="pd mg-rl-2
            mg-bottom-1
          "
          value={login.password}
          onChange={(e) => loginInputHandler(e)}
        />
        <button className="pd border-none">LOG IN</button>
      </div>
    </>
  );
};

export { Login };
