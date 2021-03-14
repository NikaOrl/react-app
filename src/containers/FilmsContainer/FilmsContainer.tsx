import React from "react";

import films from "../../mocks/films.json";

import FilmsList from "../../components/FilmsList/FilmsList";
import { IFilm } from "../../components/FilmPreview/FilmPreview";
import { SortValues } from "../../components/StateLine/StateLine";

interface FilmsContainerProps {
  sort: SortValues;
}

const FilmsContainer = (props: FilmsContainerProps) => {
  return <FilmsList sort={props.sort} films={films as IFilm[]} />;
};

export default FilmsContainer;
