import React, { Dispatch, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { FilmState, IFilm } from "../../models/film.model";
import { getFilms } from "../../store/actionCreators";
import FilmPreview from "../FilmPreview/FilmPreview";
import { SortValues } from "../StateLine/StateLine";

import "./FilmsList.scss";

interface FilmsListProps {
  films: IFilm[];
  sort: SortValues;
}

const sortFilms = (filmsToSort: IFilm[], sort: SortValues) =>
  filmsToSort.sort((film1: IFilm, film2: IFilm) => {
    if (sort === SortValues.RELEASE_DATE) {
      return film1.release_date > film2.release_date ? -1 : 1;
    }
    return film1.title > film2.title ? -1 : 1;
  });

const FilmsList: React.FC<FilmsListProps> = (props: FilmsListProps) => {
  const dispatch: Dispatch<any> = useDispatch();

  const films: IFilm[] = useSelector(
    (state: FilmState) => state.films,
    shallowEqual
  );

  useEffect(() => {
    dispatch(getFilms());
  }, []);

  // const handleDelete = (id: number) => {
  //   const filteredFilms = films.filter((film: IFilm) => film.id !== id);
  //   setFilms(filteredFilms);
  // };

  // const handleEdit = (film: IFilm) => {
  //   const editedFilms = films.map((filmItem: IFilm) =>
  //     filmItem.id === film.id ? film : filmItem
  //   );
  //   setFilms(editedFilms);
  // };

  return (
    <div className="films">
      <div className="films__count">{films.length} movies found</div>
      <div className="films__list">
        {sortFilms(films, props.sort).map((movie: IFilm) => (
          <FilmPreview film={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default FilmsList;
