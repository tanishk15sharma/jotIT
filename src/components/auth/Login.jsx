import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { validLogin } from "../../utilities/auth-utils";
import loadingGif from "../../assets/loading.gif";
const Login = ({ toggleAuth }) => {
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuth();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
    others: "",
  });

  const loginInputHandler = (e) => {
    setLogin((data) => ({ ...data, [e.target.name]: e.target.value }));
    setLoginErrors((err) => ({ ...err, [e.target.name]: "" }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = validLogin(login, loginErrors);

    if (!isValid) {
      setLoginErrors(errors);
      return;
    }

    postLoginData(login.email, login.password);
  };

  const postLoginData = async (email, password) => {
    setLoading(true);
    try {
      const { data, status } = await axios.post("/api/auth/login", {
        email,
        password,
      });
      if (status !== 200) return;
      console.log(data, status);
      setAuth({ isLoggedIn: true, encodedToken: data.encodedToken });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err.response.data);
      setLoginErrors((loginErr) => ({
        ...loginErr,
        others: err.response.data.errors[0],
      }));
    }
  };
  const testLogin = () => {
    setLogin({ email: "adarshbalika@gmail.com", password: "adarshBalika123" });
  };

  return (
    <form className="flex-cl h30 fixed-w30 " onSubmit={handleLoginSubmit}>
      <div className="border-bottom">
        <button className=" w50 border-rg font-lg pd">LOG IN</button>
        <button
          className=" w50 font-lg border-reset pd pointer"
          onClick={() => toggleAuth(false)}
          type="button"
        >
          SIGNUP
        </button>
      </div>
      <input
        type="text"
        placeholder="EMAIL"
        name="email"
        className="pd mg-rl-2 mg-top-3"
        onChange={(e) => loginInputHandler(e)}
        value={login.email}
      />
      {loginErrors.email && (
        <span className="err-msg font-sm mg-rl-2">
          <i className="fa-solid fa-circle-exclamation color-err"></i>
          {loginErrors.email}
        </span>
      )}

      <input
        type="text"
        name="password"
        placeholder="PASSWORD"
        className="pd mg-rl-2 "
        value={login.password}
        onChange={(e) => loginInputHandler(e)}
      />

      {loginErrors.password && (
        <span className="err-msg font-sm mg-rl-2">
          <i className="fa-solid fa-circle-exclamation color-err"></i>
          {loginErrors.password}
        </span>
      )}
      {loginErrors.others && (
        <span className="err-msg font-sm mg-rl-2">
          <i className="fa-solid fa-circle-exclamation color-err"></i>
          {loginErrors.others}
        </span>
      )}

      <button
        className=" border-reset  mg-bottom-3 txt-start mg-left-2 txt-underline pointer"
        onClick={() => testLogin()}
      >
        Test Login
      </button>

      {loading ? (
        <button className="pd border-rg font-lg pointer">
          <img src={loadingGif} />
        </button>
      ) : (
        <button className="pd border-rg font-lg pointer">LOG IN</button>
      )}
    </form>
  );
};

export { Login };
