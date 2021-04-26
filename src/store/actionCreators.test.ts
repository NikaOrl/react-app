import reducer, { initialState } from "./reducer";
import * as types from "./actionTypes";
import { IFilm } from "../models/film.model";
import { addFilm, editFilm, getFilms, removeFilm } from "./actionCreators";
import thunk from "redux-thunk";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { AnyAction } from "redux";

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

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("actionCreators", () => {
  let store: MockStoreEnhanced<unknown, {}>;

  beforeEach(() => {
    store = mockStore({ films: [] });
  });

  describe("should handle", () => {
    beforeEach(() => {
      global.fetch = (jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ result: "test result" })
        })
      ) as unknown) as (
        input: RequestInfo,
        init?: RequestInit | undefined
      ) => Promise<Response>;
    });

    it("addFilm", () => {
      const expectedActions = [
        { type: types.FILMS_STARTED },
        { type: types.ADD_FILM, film: { result: "test result" } }
      ];

      store.dispatch((addFilm(testFilm1) as unknown) as AnyAction).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("removeFilm", () => {
      global.fetch = (jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ result: "test result" }),
          status: 204
        })
      ) as unknown) as (
        input: RequestInfo,
        init?: RequestInit | undefined
      ) => Promise<Response>;

      const expectedActions = [
        { type: types.FILMS_STARTED },
        { type: types.REMOVE_FILM, film: testFilm1 }
      ];

      store
        .dispatch((removeFilm(testFilm1) as unknown) as AnyAction)
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("editFilm", () => {
      const expectedActions = [
        { type: types.FILMS_STARTED },
        { type: types.EDIT_FILM, film: { result: "test result" } }
      ];

      store.dispatch((editFilm(testFilm1) as unknown) as AnyAction).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("getFilms", () => {
      const expectedActions = [
        { type: types.FILMS_STARTED },
        { type: types.GET_FILMS, films: undefined }
      ];

      store.dispatch((getFilms("") as unknown) as AnyAction).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe("should handle error", () => {
    beforeEach(() => {
      global.fetch = (jest.fn(() =>
        Promise.resolve({
          json: () => Promise.reject({ message: "test error" })
        })
      ) as unknown) as (
        input: RequestInfo,
        init?: RequestInit | undefined
      ) => Promise<Response>;
    });

    it("addFilm", () => {
      const expectedActions = [
        { type: types.FILMS_STARTED },
        { type: types.FILMS_FAILURE, error: "test error" }
      ];

      store.dispatch((addFilm(testFilm1) as unknown) as AnyAction).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("removeFilm ", () => {
      const expectedActions = [
        { type: types.FILMS_STARTED },
        { type: types.FILMS_FAILURE, error: "something went wrong" }
      ];

      store
        .dispatch((removeFilm(testFilm1) as unknown) as AnyAction)
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("editFilm", () => {
      const expectedActions = [
        { type: types.FILMS_STARTED },
        { type: types.FILMS_FAILURE, error: "test error" }
      ];

      store.dispatch((editFilm(testFilm1) as unknown) as AnyAction).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("getFilms", () => {
      const expectedActions = [
        { type: types.FILMS_STARTED },
        { type: types.FILMS_FAILURE, error: "test error" }
      ];

      store.dispatch((getFilms("") as unknown) as AnyAction).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
