import React, { useEffect } from "react";

import films from "../../mocks/films.json";

import FilmsList from "../../components/FilmsList/FilmsList";
import { IFilm } from "../../components/FilmPreview/FilmPreview";
import { SortValues } from "../../components/StateLine/StateLine";

interface FilmsContainerProps {
  sort: SortValues;
}

const FilmsContainer = (props: FilmsContainerProps) => {
  const [sort, setSort] = React.useState(props.sort);

  const handleSortChange = (sort: string) => {
    setSort(sort as SortValues);
  };

  useEffect(() => {
    handleSortChange(props.sort);
  });

  return <FilmsList sort={sort} films={films as IFilm[]} />;
};

export default FilmsContainer;
