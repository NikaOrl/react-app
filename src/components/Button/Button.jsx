import React from "react";

import "./Button.scss";

const Button = props => {
  return (
    <button
      style={{ height: props.height, width: props.width }}
      className={`btn ${props.theme ? props.theme : "pink"}`}
    >
      {props.title}
    </button>
  );
};

export default Button;
