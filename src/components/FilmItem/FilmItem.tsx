import React from "react";

import { fetchFilm, useAsync } from "../../utils/asyncHook";

import "./FilmItem.scss";

const FilmItem: React.FC = () => {
  const film = useAsync(fetchFilm);

  return film ? (
    <div className="film-item">
      <div className="film-item__img">
        <img src={film.poster_path} alt={film.title} />
      </div>
      <div className="film-item__info">
        <div className="film-item__title-and-raiting">
          <h1>{film.title}</h1>
          <div className="film-item__rating">{film.vote_average}</div>
        </div>
        <div className="film-item__release-date">
          <span>{film.release_date}</span> year
        </div>
        <div className="film-item__overview">{film.overview}</div>
      </div>
    </div>
  ) : (
    <div>Film not found</div>
  );
};

export default FilmItem;
