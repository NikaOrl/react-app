import React from "react";
import TextField from "@material-ui/core/TextField";

import MovieForm from "../MovieForm/MovieForm";
import { IFilm } from "../../models/film.model";

import "./EditMovieModal.scss";

interface EditMovieModalProps {
  film: IFilm;
  onEdit: (film: IFilm) => void;
}

const EditMovieModal: React.FC<EditMovieModalProps> = (
  props: EditMovieModalProps
) => {
  return (
    <div className="edit-modal">
      <h1 className="edit-modal__header">EDIT MOVIE</h1>
      <TextField
        disabled
        id="outlined-read-only-input"
        label="MOVIE ID"
        defaultValue={props.film.id}
        InputProps={{
          readOnly: true
        }}
        variant="outlined"
      />
      <MovieForm film={props.film} onSubmit={props.onEdit} />
    </div>
  );
};

export default EditMovieModal;
