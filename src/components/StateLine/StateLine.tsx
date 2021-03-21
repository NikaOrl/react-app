import React from "react";

import RadioButton from "../RadioButton/RadioButton";

import "./StateLine.scss";

export enum SortValues {
  RATING = "rating",
  RELEASE_DATE = "release_date"
}

export enum FilterValues {
  ALL = "ALL",
  DOCUMENTARY = "DOCUMENTARY",
  COMEDY = "COMEDY",
  HORROR = "HORROR",
  CRIME = "CRIME"
}

interface StateLineProps {
  handleSortChange: (id: string) => void;
}

const StateLine: React.FC<StateLineProps> = (props: StateLineProps) => {
  const genreOptions = [
    {
      title: "ALL",
      isChecked: true,
      id: FilterValues.ALL
    },
    {
      title: "DOCUMENTARY",
      isChecked: false,
      id: FilterValues.DOCUMENTARY
    },
    {
      title: "COMEDY",
      isChecked: false,
      id: FilterValues.COMEDY
    },
    {
      title: "HORROR",
      isChecked: false,
      id: FilterValues.HORROR
    },
    {
      title: "CRIME",
      isChecked: false,
      id: FilterValues.CRIME
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
