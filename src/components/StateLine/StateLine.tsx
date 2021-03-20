import React from "react";

import RadioButton from "../RadioButton/RadioButton";

import "./StateLine.scss";

export enum SortValues {
  RATING = "rating",
  RELEASE_DATE = "release_date"
}

interface StateLineProps {
  handleSortChange: (id: string) => void;
}

const StateLine: React.FC<StateLineProps> = (props: StateLineProps) => {
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
      id: SortValues.RELEASE_DATE
    },
    {
      title: "RATING",
      isChecked: false,
      id: SortValues.RATING
    }
  ];

  const handleGanreChange = (id: string) => {};

  return (
    <div className="state-line">
      <RadioButton options={genreOptions} onValueChange={handleGanreChange} />
      <RadioButton
        title="SORT BY"
        options={sorftOptions}
        onValueChange={props.handleSortChange}
      />
    </div>
  );
};

export default StateLine;
