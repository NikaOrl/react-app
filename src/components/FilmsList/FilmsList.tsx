import React from "react";

import FilmPreview, { IFilm } from "../FilmPreview/FilmPreview";

import "./FilmsList.scss";

interface Props {
  films: IFilm[];
}

const FilmsList = (props: Props) => {
  return (
    <div className="films">
      <div className="films__count">{props.films.length} movies found</div>
      <div className="films__list">
        {props.films.map((movie: IFilm) => (
          <FilmPreview
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            genres={movie.genres}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FilmsList;
