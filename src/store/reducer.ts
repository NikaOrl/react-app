import { AnyAction } from "redux";

import {
  FilmState,
  IFilm,
  FilterValues,
  SortValues
} from "../models/film.model";
import * as actionTypes from "./actionTypes";

export const initialState: FilmState = {
  loading: false,
  films: [],
  error: null,
  sort: SortValues.RELEASE_DATE,
  filter: FilterValues.ALL
};

const reducer = (
  state: FilmState = initialState,
  action: AnyAction
): FilmState => {
  switch (action.type) {
    case actionTypes.ADD_FILM:
      const newFilm: IFilm = {
        id: action.film.id,
        title: action.film.title,
        poster_path: action.film.poster_path,
        release_date: action.film.release_date,
        genres: action.film.genres,
        overview: action.film.overview,
        tagline: action.film.tagline,
        vote_average: action.film.vote_average,
        vote_count: action.film.vote_count,
        budget: action.film.budget,
        revenue: action.film.revenue,
        runtime: action.film.runtime
      };
      return {
        ...state,
        loading: false,
        error: null,
        films: state.films.concat(newFilm)
      };

    case actionTypes.REMOVE_FILM:
      const updatedFilms: IFilm[] = state.films.filter(
        film => film.id !== action.film.id
      );
      return {
        ...state,
        loading: false,
        error: null,
        films: updatedFilms
      };

    case actionTypes.EDIT_FILM:
      const editedFilm: IFilm = {
        id: action.film.id,
        title: action.film.title,
        poster_path: action.film.poster_path,
        release_date: action.film.release_date,
        genres: action.film.genres,
        overview: action.film.overview,
        tagline: action.film.tagline,
        vote_average: action.film.vote_average,
        vote_count: action.film.vote_count,
        budget: action.film.budget,
        revenue: action.film.revenue,
        runtime: action.film.runtime
      };

      const editedFilms: IFilm[] = state.films.map(film =>
        film.id === editedFilm.id ? editedFilm : film
      );

      return {
        ...state,
        loading: false,
        error: null,
        films: editedFilms
      };

    case actionTypes.GET_FILMS:
      return {
        ...state,
        loading: false,
        error: null,
        films: action.films
      };

    case actionTypes.FILMS_STARTED:
      return {
        ...state,
        loading: true
      };

    case actionTypes.FILMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case actionTypes.CHANGE_SORT:
      return {
        ...state,
        sort: action.sort
      };

    case actionTypes.CHANGE_FILTER:
      return {
        ...state,
        filter: action.filter
      };
  }
  return state;
};

export default reducer;
