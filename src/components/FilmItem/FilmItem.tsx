import React from "react";

import { IFilm } from "../FilmPreview/FilmPreview";

import "./FilmItem.scss";

export interface FilmItemProps {
  film: IFilm;
}

const FilmItem = (props: FilmItemProps) => {
  return props.film ? (
    <div className="film-item">
      <div className="film-item__img">
        <img src={props.film.poster_path} alt={props.film.title} />
      </div>
      <div className="film-item__info">
        <div className="film-item__title-and-raiting">
          <h1>{props.film.title}</h1>
        </div>
        <div className="film-item__release-date">
          <span>{props.film.release_date}</span> year
        </div>
        <div className="film-item__overview">{props.film.overview}</div>
      </div>
    </div>
  ) : (
    <div>Film not found</div>
  );
};

export default FilmItem;
