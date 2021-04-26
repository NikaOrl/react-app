import React from "react";
import { render } from "@testing-library/react";
import AddMovieModal from "./AddMovieModal";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import MovieForm from "../MovieForm/MovieForm";
import { IFilm } from "../../models/film.model";
import thunk from "redux-thunk";

Enzyme.configure({ adapter: new Adapter() });

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

describe("AddMovieModal", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore([thunk]);
  let store;

  it("should take a snapshot", () => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();

    const mock = jest.fn();

    const { asFragment } = render(
      <Provider store={store}>
        <AddMovieModal onAdd={mock} />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should call", () => {
    store = mockStore(initialState);

    global.fetch = (jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ result: "test result" })
      })
    ) as unknown) as (
      input: RequestInfo,
      init?: RequestInit | undefined
    ) => Promise<Response>;
    const mock = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <AddMovieModal onAdd={mock} />
      </Provider>
    );
    const { onSubmit } = wrapper.find(MovieForm).props();
    onSubmit(testFilm1);
    expect(mock).toBeCalled();
  });
});
