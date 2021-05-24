import React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

import "./style.scss";
import "./material.scss";

ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
