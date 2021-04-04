import React from "react";
import { Redirect, useParams } from "react-router-dom";

import { IFilm } from "../../models/film.model";
import { fetchFilm, useAsync } from "../../utils/asyncHook";

import "./FilmItem.scss";

const FilmItem: React.FC = () => {
  let { id } = useParams() as { id: string };

  let film = useAsync(fetchFilm, id);

  if (film) {
    return (film as IFilm).id ? (
      <div className="film-item">
        <div className="film-item__img">
          <img src={(film as IFilm).poster_path} alt={(film as IFilm).title} />
        </div>
        <div className="film-item__info">
          <div className="film-item__title-and-raiting">
            <h1>{(film as IFilm).title}</h1>
            <div className="film-item__rating">
              {(film as IFilm).vote_average}
            </div>
          </div>
          <div className="film-item__release-date">
            <span>{(film as IFilm).release_date}</span> year
          </div>
          <div className="film-item__overview">{(film as IFilm).overview}</div>
        </div>
      </div>
    ) : (
      <Redirect to="/film-not-found"></Redirect>
    );
  }
  return <div>Loading...</div>;
};

export default FilmItem;
