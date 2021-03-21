import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";

import TextField from "@material-ui/core/TextField";

import MovieForm from "../MovieForm/MovieForm";
import { IFilm, IFilmBase } from "../../models/film.model";
import { editFilm } from "../../store/actionCreators";

import "./EditMovieModal.scss";

interface EditMovieModalProps {
  film: IFilm;
  onEdit: () => void;
}

const EditMovieModal: React.FC<EditMovieModalProps> = (
  props: EditMovieModalProps
) => {
  const dispatch: Dispatch<any> = useDispatch();

  const handleEditFilm = React.useCallback(
    (film: IFilm | IFilmBase) => {
      dispatch(editFilm(film as IFilm));
      props.onEdit();
    },
    [dispatch]
  );

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
      <MovieForm film={props.film} onSubmit={handleEditFilm} />
    </div>
  );
};

export default EditMovieModal;
