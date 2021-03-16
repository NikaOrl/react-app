import React from "react";

import { fetchFilms, useAsync } from "../../utils/asyncHook";
import { IFilm } from "../../models/film.model";

import "./FilmItem.scss";

export interface FilmItemProps {
  film: IFilm;
}

const FilmItem = () => {
  const film = useAsync(fetchFilms);

  return film[0] ? (
    <div className="film-item">
      <div className="film-item__img">
        <img src={film[0].poster_path} alt={film[0].title} />
      </div>
      <div className="film-item__info">
        <div className="film-item__title-and-raiting">
          <h1>{film[0].title}</h1>
        </div>
        <div className="film-item__release-date">
          <span>{film[0].release_date}</span> year
        </div>
        <div className="film-item__overview">{film[0].overview}</div>
      </div>
    </div>
  ) : (
    <div>Film not found</div>
  );
};

export default FilmItem;
