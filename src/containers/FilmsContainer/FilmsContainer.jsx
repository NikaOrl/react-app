import React from "react";

import films from "../../mocks/films.json";

import FilmsList from "../../components/FilmsList/FilmsList";

const FilmsContainer = () => {
  return <FilmsList films={films} />;
};

export default FilmsContainer;
