// myForm.test.js
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MovieForm, { genres } from "./MovieForm";
import { IFilm } from "../../models/film.model";

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

test("rendering and submitting Formik form", async () => {
  const handleSubmit = jest.fn();
  render(<MovieForm onSubmit={handleSubmit} />);

  const date = new Date();

  userEvent.type(screen.getByLabelText("TITLE"), "Test title");
  userEvent.type(screen.getByLabelText("POSTER URL"), "Test url");
  fireEvent.change(screen.getByLabelText("RELEASE DATE"), date);

  fireEvent.mouseDown(screen.getByTestId("id-country"));
  const countryOption = await waitFor(() => screen.getByText(genres[0]));
  fireEvent.click(countryOption);

  userEvent.type(screen.getByLabelText("OVERVIEW"), "Test overview");
  userEvent.type(screen.getByLabelText("TAGLINE"), "Test tagline");
  userEvent.type(screen.getByLabelText("VOTE AVERAGE"), "111");
  userEvent.type(screen.getByLabelText("VOTE COUNT"), "111");
  userEvent.type(screen.getByLabelText("BUDGET"), "111");
  userEvent.type(screen.getByLabelText("REVENUE"), "111");
  userEvent.type(screen.getByLabelText("RUNTIME"), "111");

  userEvent.click(screen.getByText("SUBMIT"));

  waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith(
      {
        title: "Test title",
        poster_path: "Test url",
        release_date: date,
        genres: [genres[0]],
        overview: "Test overview",
        tagline: "Test tagline",
        vote_average: 111,
        vote_count: 111,
        budget: 111,
        revenue: 111,
        runtime: 111
      },
      expect.anything()
    )
  );
});

test("rendering and submitting Formik form with existing film", async () => {
  const handleSubmit = jest.fn();
  render(<MovieForm onSubmit={handleSubmit} film={testFilm1} />);

  const date = new Date();

  userEvent.type(screen.getByLabelText("TITLE"), "Test title");
  userEvent.type(screen.getByLabelText("POSTER URL"), "Test url");
  fireEvent.change(screen.getByLabelText("RELEASE DATE"), date);

  fireEvent.mouseDown(screen.getByTestId("id-country"));
  const countryOption = await waitFor(() => screen.getByText(genres[0]));
  fireEvent.click(countryOption);

  userEvent.type(screen.getByLabelText("OVERVIEW"), "Test overview");
  userEvent.type(screen.getByLabelText("TAGLINE"), "Test tagline");
  userEvent.type(screen.getByLabelText("VOTE AVERAGE"), "111");
  userEvent.type(screen.getByLabelText("VOTE COUNT"), "111");
  userEvent.type(screen.getByLabelText("BUDGET"), "111");
  userEvent.type(screen.getByLabelText("REVENUE"), "111");
  userEvent.type(screen.getByLabelText("RUNTIME"), "111");

  userEvent.click(screen.getByText("SUBMIT"));

  waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith(
      {
        title: "Test title",
        poster_path: "Test url",
        release_date: date,
        genres: [genres[0]],
        overview: "Test overview",
        tagline: "Test tagline",
        vote_average: 111,
        vote_count: 111,
        budget: 111,
        revenue: 111,
        runtime: 111
      },
      expect.anything()
    )
  );
});
