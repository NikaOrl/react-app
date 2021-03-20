import React from "react";

import { fetchFilms, useAsync } from "../../utils/asyncHook";

import "./FilmItem.scss";

const FilmItem: React.FC = () => {
  const film = useAsync(fetchFilms);

  return film[0] ? (
    <div className="film-item">
      <div className="film-item__img">
        <img src={film[0].poster_path} alt={film[0].title} />
      </div>
      <div className="film-item__info">
        <div className="film-item__title-and-raiting">
          <h1>{film[0].title}</h1>
          <div className="film-item__rating">{film[0].vote_average}</div>
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
