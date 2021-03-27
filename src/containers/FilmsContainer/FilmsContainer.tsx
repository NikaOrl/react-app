import React, { Dispatch, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { FilmState, IFilm } from "../../models/film.model";
import { getFilms } from "../../store/actionCreators";
import FilmsList from "../../components/FilmsList/FilmsList";

const FilmsContainer: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const films: IFilm[] = useSelector(
    (state: FilmState) => state.films,
    shallowEqual
  );

  useEffect(() => {
    dispatch(getFilms());
  }, []);

  return <FilmsList films={films} />;
};

export default FilmsContainer;
