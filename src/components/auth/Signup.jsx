import axios from "axios";
import React, { useState } from "react";
import { validSignUp } from "../../utilities/auth-utils";

const Signup = ({ toggleAuth }) => {
  const [signup, setSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    newPassword: "",
  });
  const [signupErrors, setSignupErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    newPassword: "",
  });

  const signUpInputHandler = (e) => {
    setSignup((data) => ({ ...data, [e.target.name]: e.target.value }));
    setSignupErrors((err) => ({ ...err, [e.target.name]: "" }));
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = validSignUp(signup, signupErrors);

    if (!isValid) {
      setSignupErrors(errors);
      return;
    }

    postSignUpData(signup);
  };

  const postSignUpData = async () => {
    try {
      const { data, status } = await axios.post("/api/auth/signup", signup);
      console.log(data);
      if (status !== 201) return;
    } catch (err) {
      console.log(err.response);
    }
  };

  console.log(signupErrors);
  return (
    <form className="flex-cl fixed-w30" onSubmit={handleSignUpSubmit}>
      <div className="border-bottom">
        <button
          className=" w50 border-reset font-lg pd"
          onClick={() => toggleAuth(true)}
          type="button"
        >
          LOGIN
        </button>
        <button className=" w50 font-lg border-rg pd">SIGNUP</button>
      </div>
      <input
        type="text"
        placeholder="FIRST NAME"
        className="pd mg-rl-2 mg-top-1"
        value={signup.firstName}
        name="firstName"
        onChange={(e) => signUpInputHandler(e)}
      />
      {signupErrors.firstName && (
        <span className="err-msg font-sm mg-rl-2">
          <i className="fa-solid fa-circle-exclamation color-err"></i>
          {signupErrors.firstName}
        </span>
      )}
      <input
        type="text"
        placeholder="LAST NAME"
        className="pd mg-rl-2"
        value={signup.lastName}
        name="lastName"
        onChange={(e) => signUpInputHandler(e)}
      />
      {signupErrors.lastName && (
        <span className="err-msg font-sm mg-rl-2">
          <i className="fa-solid fa-circle-exclamation color-err"></i>
          {signupErrors.lastName}
        </span>
      )}
      <input
        type="text"
        placeholder="EMAIL"
        className="pd mg-rl-2"
        value={signup.email}
        name="email"
        onChange={(e) => signUpInputHandler(e)}
      />
      {signupErrors.email && (
        <span className="err-msg font-sm mg-rl-2">
          <i className="fa-solid fa-circle-exclamation color-err"></i>
          {signupErrors.email}
        </span>
      )}

      <input
        type="text"
        placeholder="CREATE PASSWORD"
        className="pd mg-rl-2 
     
      "
        value={signup.newPassword}
        name="newPassword"
        onChange={(e) => signUpInputHandler(e)}
      />
      {signupErrors.newPassword && (
        <span className="err-msg font-sm mg-rl-2 ">
          <i className="fa-solid fa-circle-exclamation color-err"></i>
          {signupErrors.newPassword}
        </span>
      )}
      <div className="mg-bottom-1"></div>
      <button className="pd border-none">SIGN IN</button>
    </form>
  );
};

export { Signup };
