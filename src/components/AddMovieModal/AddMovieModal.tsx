import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";

import MovieForm from "../MovieForm/MovieForm";
import { IFilm, IFilmBase } from "../../models/film.model";
import { addFilm } from "../../store/actionCreators";

import "./AddMovieModal.scss";

interface AddMovieModalProps {
  onAdd: () => void;
}

const AddMovieModal: React.FC<AddMovieModalProps> = (
  props: AddMovieModalProps
) => {
  const dispatch: Dispatch<any> = useDispatch();

  const handleAddFilm = React.useCallback(
    (film: IFilm | IFilmBase) => {
      dispatch(addFilm(film as IFilmBase));
      props.onAdd();
    },
    [dispatch]
  );

  return (
    <div className="add-modal">
      <h1 className="add-modal__header">ADD MOVIE</h1>
      <MovieForm onSubmit={handleAddFilm} />
    </div>
  );
};

export default AddMovieModal;
