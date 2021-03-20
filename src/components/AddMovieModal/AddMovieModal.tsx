import React from "react";

import MovieForm from "../MovieForm/MovieForm";
import { IFilm } from "../../models/film.model";

import "./AddMovieModal.scss";

interface AddMovieModalProps {
  onAdd: (film: IFilm) => void;
}

const AddMovieModal: React.FC<AddMovieModalProps> = (
  props: AddMovieModalProps
) => {
  return (
    <div className="add-modal">
      <h1 className="add-modal__header">ADD MOVIE</h1>
      <MovieForm onSubmit={props.onAdd} />
    </div>
  );
};

export default AddMovieModal;
