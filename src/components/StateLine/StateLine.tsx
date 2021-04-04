import React, { Dispatch } from "react";

import RadioButton from "../RadioButton/RadioButton";
import { FilterValues, SortValues } from "../../models/film.model";

import "./StateLine.scss";
import { useDispatch } from "react-redux";
import { changeFilter, changeSort, getFilms } from "../../store/actionCreators";
import { useParams } from "react-router-dom";

const StateLine: React.FC = () => {
  let { search } = useParams() as { search: string };

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

  const dispatch: Dispatch<any> = useDispatch();

  const handleGanreChange = React.useCallback(
    (id: string) => {
      dispatch(changeFilter(id));
      dispatch(getFilms(search));
    },
    [dispatch, search]
  );

  const handleSortChange = React.useCallback(
    (id: string) => {
      dispatch(changeSort(id));
      dispatch(getFilms(search));
    },
    [dispatch, search]
  );

  return (
    <div className="state-line">
      <RadioButton options={genreOptions} onValueChange={handleGanreChange} />
      <RadioButton
        title="SORT BY"
        options={sorftOptions}
        onValueChange={handleSortChange}
      />
    </div>
  );
};

export default StateLine;
