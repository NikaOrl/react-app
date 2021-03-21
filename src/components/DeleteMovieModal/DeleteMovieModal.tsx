import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";

import { IFilm } from "../../models/film.model";
import { removeFilm } from "../../store/actionCreators";
import Button from "../Button/Button";

import "./DeleteMovieModal.scss";

interface DeleteMovieModalProps {
  film: IFilm;
  onDelete: () => void;
}

const DeleteMovieModal: React.FC<DeleteMovieModalProps> = (
  props: DeleteMovieModalProps
) => {
  const dispatch: Dispatch<any> = useDispatch();

  const handleRemoveFilm = React.useCallback(() => {
    dispatch(removeFilm(props.film));
    props.onDelete();
  }, [dispatch]);

  return (
    <div className="delete-modal">
      <h1 className="delete-modal__header">DELETE MOVIE</h1>
      <span className="delete-modal__label">
        Are you sure you want to delete this movie?
      </span>
      <div className="delete-modal__btn-container">
        <Button title="CONFIRM" onClick={handleRemoveFilm} />
      </div>
    </div>
  );
};

export default DeleteMovieModal;
