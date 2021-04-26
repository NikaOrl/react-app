import reducer, { initialState } from "./reducer";
import * as types from "./actionTypes";
import { IFilm } from "../models/film.model";

const testFilm1: IFilm = {
  id: 1,
  title: "Fifty Shades Freed",
  tagline: "Don't miss the climax",
  vote_average: 6.1,
  vote_count: 1195,
  release_date: "2018-02-07",
  poster_path:
    "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
  overview:
    "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
  budget: 55000000,
  revenue: 136906000,
  genres: ["Drama", "Romance"],
  runtime: 106
};

const testFilm2: IFilm = {
  id: 181808,
  title: "Star Wars: The Last Jedi",
  tagline: "The Saga Continues",
  vote_average: 7.1,
  vote_count: 4732,
  release_date: "2017-12-13",
  poster_path:
    "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  budget: 200000000,
  revenue: 1325937250,
  genres: ["Fantasy", "Adventure", "Science Fiction"],
  runtime: 152
};

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: null })).toEqual(initialState);
  });

  it("should handle ADD_FILM", () => {
    expect(
      reducer(
        { ...initialState, films: [testFilm2] },
        {
          type: types.ADD_FILM,
          film: testFilm1
        }
      )
    ).toEqual({
      ...initialState,
      loading: false,
      error: null,
      films: [testFilm2, testFilm1]
    });
  });

  it("should handle REMOVE_FILM", () => {
    expect(
      reducer(
        { ...initialState, films: [testFilm2, testFilm1] },
        {
          type: types.REMOVE_FILM,
          film: testFilm1
        }
      )
    ).toEqual({
      ...initialState,
      loading: false,
      error: null,
      films: [testFilm2]
    });
  });

  it("should handle EDIT_FILM", () => {
    expect(
      reducer(
        {
          ...initialState,
          films: [
            testFilm2,
            {
              id: 1,
              title: "1",
              poster_path: "1",
              release_date: "1",
              genres: ["1"],
              overview: "1",
              runtime: 1
            }
          ]
        },
        {
          type: types.EDIT_FILM,
          film: testFilm1
        }
      )
    ).toEqual({ ...initialState, films: [testFilm2, testFilm1] });
  });

  it("should handle GET_FILMS", () => {
    expect(
      reducer(initialState, {
        type: types.GET_FILMS,
        films: [testFilm2, testFilm1]
      })
    ).toEqual({
      ...initialState,
      loading: false,
      error: null,
      films: [testFilm2, testFilm1]
    });
  });

  it("should handle FILMS_STARTED", () => {
    expect(
      reducer(initialState, {
        type: types.FILMS_STARTED
      })
    ).toEqual({ ...initialState, loading: true });
  });

  it("should handle FILMS_FAILURE", () => {
    const error = "some error";
    expect(
      reducer(initialState, {
        type: types.FILMS_FAILURE,
        error
      })
    ).toEqual({ ...initialState, loading: false, error });
  });

  it("should handle CHANGE_SORT", () => {
    const sort = "some sort";
    expect(
      reducer(initialState, {
        type: types.CHANGE_SORT,
        sort
      })
    ).toEqual({ ...initialState, sort });
  });

  it("should handle CHANGE_FILTER", () => {
    const filter = "some sort";
    expect(
      reducer(initialState, {
        type: types.CHANGE_FILTER,
        filter
      })
    ).toEqual({ ...initialState, filter });
  });
});
