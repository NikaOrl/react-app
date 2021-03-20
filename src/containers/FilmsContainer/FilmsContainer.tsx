import React from "react";

import FilmsList from "../../components/FilmsList/FilmsList";
import { SortValues } from "../../components/StateLine/StateLine";
import { fetchFilms, useAsync } from "../../utils/asyncHook";

interface FilmsContainerProps {
  sort: SortValues;
}

const FilmsContainer: React.FC<FilmsContainerProps> = (
  props: FilmsContainerProps
) => {
  const films = useAsync(fetchFilms);

  return <FilmsList sort={props.sort} films={films} />;
};

export default FilmsContainer;
