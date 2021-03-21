import { AnyAction } from "redux";
import { FilterValues, SortValues } from "../components/StateLine/StateLine";
import { FilmState, IFilm } from "../models/film.model";
import * as actionTypes from "./actionTypes";

const initialState: FilmState = {
  loading: false,
  films: [],
  error: null,
  sort: SortValues.RATING,
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
        tagline: action.film.tagline ? action.film.tagline : null,
        vote_average: action.film.vote_average
          ? action.film.vote_average
          : null,
        vote_count: action.film.vote_count ? action.film.vote_count : null,
        budget: action.film.budget ? action.film.budget : null,
        revenue: action.film.revenue ? action.film.revenue : null,
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
        tagline: action.film.tagline ? action.film.tagline : null,
        vote_average: action.film.vote_average
          ? action.film.vote_average
          : null,
        vote_count: action.film.vote_count ? action.film.vote_count : null,
        budget: action.film.budget ? action.film.budget : null,
        revenue: action.film.revenue ? action.film.revenue : null,
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

    // case actionTypes.GET_FILM_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: null,
    //     film: action.film
    //   };

    case actionTypes.GET_FILMS_SUCCESS:
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
  }
  return state;
};

export default reducer;
