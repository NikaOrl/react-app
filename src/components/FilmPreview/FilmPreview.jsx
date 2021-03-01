import React from "react";

import "./FilmPreview.scss";

const FilmPreview = props => {
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
      <div className="item-preview__genres">{props.filmGenres}</div>
    </div>
  );
};

export default FilmPreview;
