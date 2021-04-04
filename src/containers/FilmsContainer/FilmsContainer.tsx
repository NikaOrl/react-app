import React, { Dispatch, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { FilmState, IFilm } from "../../models/film.model";
import { getFilms } from "../../store/actionCreators";
import FilmsList from "../../components/FilmsList/FilmsList";
import NoMoviesFound from "../../components/NoMoviesFound/NoMoviesFound";

const FilmsContainer: React.FC = () => {
  let { search } = useParams() as { search: string };

  const dispatch: Dispatch<any> = useDispatch();

  const films: IFilm[] = useSelector(
    (state: FilmState) => state.films,
    shallowEqual
  );

  useEffect(() => {
    dispatch(getFilms(search));
  }, [search]);

  return films.length > 0 ? <FilmsList films={films} /> : <NoMoviesFound />;
};

export default FilmsContainer;
