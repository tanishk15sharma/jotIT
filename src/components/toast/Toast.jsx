import React, { useState, useEffect } from "react";
import "./Toast.scss";
const Toast = () => {
  const [show, setShow] = useState("show");

  useEffect(() => {
    setTimeout(() => {
      setShow("");
    }, 2000);
  }, []);

  return show && <div className={`snackbar-center ${show}`}>Toast</div>;
};

export { Toast };
