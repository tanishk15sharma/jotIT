import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
makeServer();

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
