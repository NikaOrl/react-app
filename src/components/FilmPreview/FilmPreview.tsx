import React from "react";

import "./FilmPreview.scss";

export interface IFilm {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  genres: string[];
}

const FilmPreview = (props: IFilm) => {
  return (
    <div className="item-preview">
      <img
        className="item-preview__poster"
        src={props.poster_path}
        alt={props.title}
      />
      <div className="item-preview__title">
        <div>
          <h3>{props.title}</h3>
        </div>
        <div>
          <span className="item-preview__release-date">
            {props.release_date}
          </span>
        </div>
      </div>
      <div className="item-preview__genres">{props.genres.join(" & ")}</div>
    </div>
  );
};

export default FilmPreview;
