import React from "react";

import RadioButton from "../RadioButton/RadioButton";

import "./StateLine.scss";

const StateLine = () => {
  const genreOptions = [
    {
      title: "ALL",
      isChecked: true,
      id: "0"
    },
    {
      title: "DOCUMENTARY",
      isChecked: false,
      id: "1"
    },
    {
      title: "COMEDY",
      isChecked: false,
      id: "2"
    },
    {
      title: "HORROR",
      isChecked: false,
      id: "3"
    },
    {
      title: "CRIME",
      isChecked: false,
      id: "4"
    }
  ];

  const sorftOptions = [
    {
      title: "RELEASE DATE",
      isChecked: true,
      id: "1"
    },
    {
      title: "RATING",
      isChecked: false,
      id: "2"
    }
  ];

  return (
    <div className="state-line">
      <RadioButton options={genreOptions} />
      <RadioButton title="SORT BY" options={sorftOptions} />
    </div>
  );
};

export default StateLine;
