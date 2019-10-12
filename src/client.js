import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import App from "./app";

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
