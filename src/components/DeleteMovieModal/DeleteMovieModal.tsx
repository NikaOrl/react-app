import React from "react";

import Button from "../Button/Button";

import "./DeleteMovieModal.scss";

interface DeleteMovieModalProps {
  onDelete: () => void;
}

const DeleteMovieModal: React.FC<DeleteMovieModalProps> = (
  props: DeleteMovieModalProps
) => {
  return (
    <div className="delete-modal">
      <h1 className="delete-modal__header">DELETE MOVIE</h1>
      <span className="delete-modal__label">
        Are you sure you want to delete this movie?
      </span>
      <div className="delete-modal__btn-container">
        <Button title="CONFIRM" onClick={props.onDelete} />
      </div>
    </div>
  );
};

export default DeleteMovieModal;
