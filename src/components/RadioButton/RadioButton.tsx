import React from "react";

import "./RadioButton.scss";

interface Props {
  title?: string;
  options: IButton[];
  onValueChange: (id: string) => void;
}

interface IButton {
  id: string;
  isChecked: boolean;
  title: string;
}

const RadioButton = (props: Props) => {
  const [value, setValue] = React.useState(
    props.options.find((option: IButton) => option.isChecked)
  );

  const onValueChange = (btn: IButton) => () => {
    props.onValueChange(btn.id);
    setValue(btn);
  };

  return (
    <div className="radio-buttons">
      {props.title ? (
        <div className="radio-buttons__title">{props.title}</div>
      ) : null}
      {props.options.map(btn => (
        <label key={btn.id}>
          <input
            className="radio-buttons__item"
            type="radio"
            checked={value?.id === btn.id}
            onChange={onValueChange(btn)}
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
