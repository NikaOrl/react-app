import React from "react";

import { IFilm } from "../../models/film.model";
import FilmPreview from "../FilmPreview/FilmPreview";

import "./FilmsList.scss";

interface FilmsListProps {
  films: IFilm[];
}

const FilmsList: React.FC<FilmsListProps> = (props: FilmsListProps) => {
  return (
    <div className="films">
      <div className="films__count">{props.films.length} movies found</div>
      <div className="films__list">
        {props.films.map((movie: IFilm) => (
          <FilmPreview film={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default FilmsList;
