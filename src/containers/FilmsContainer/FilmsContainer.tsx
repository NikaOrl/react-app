import React from "react";

import films from "../../mocks/films.json";

import FilmsList from "../../components/FilmsList/FilmsList";
import { IFilm } from "../../components/FilmPreview/FilmPreview";

const FilmsContainer = () => {
  return <FilmsList films={films as IFilm[]} />;
};

export default FilmsContainer;
