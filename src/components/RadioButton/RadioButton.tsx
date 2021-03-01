import React from "react";

import "./RadioButton.scss";

interface Props {
  title?: string;
  options: IButton[];
}

interface IButton {
  id: string;
  isChecked: boolean;
  title: string;
}

const RadioButton = (props: Props) => {
  return (
    <div className="radio-buttons">
      {props.title ? (
        <div className="radio-buttons__title">{props.title}</div>
      ) : (
        <></>
      )}
      {props.options.map(btn => (
        <label key={btn.id}>
          <input
            className="radio-buttons__item"
            type="radio"
            defaultChecked={btn.isChecked}
          />
          <div className="radio-buttons__box">
            <span>{btn.title}</span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
