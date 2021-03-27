import React from "react";

import "./Button.scss";

interface ButtonProps {
  title: string;
  theme?: string;
  height?: string;
  width?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      style={{ height: props.height, width: props.width }}
      className={`btn ${props.theme ? props.theme : "pink"}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.title}
    </button>
  );
};

export default Button;
