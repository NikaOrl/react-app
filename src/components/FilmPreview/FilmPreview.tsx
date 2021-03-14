import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import ModalWindow from "../ModalWindow/ModalWindow";
import DeleteMovieModal from "../DeleteMovieModal/DeleteMovieModal";
import EditMovieModal from "../EditMovieModal/EditMovieModal";

import "./FilmPreview.scss";
import MySVG from "-!svg-react-loader!../../assets/kebab-menu.svg";

export interface IFilm {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  genres: string[];
  overview: string;
}

export interface FilmPreviewProps {
  film: IFilm;
  onDelete: (id: number) => void;
  onEdit: (film: IFilm) => void;
}

const FilmPreview = (props: FilmPreviewProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleDelete = () => {
    props.onDelete(props.film.id);
  };

  const handleEdit = (film: IFilm) => {
    props.onEdit(film);
    handleCloseEditModal();
    handleMenuClose();
  };

  return (
    <div className="item-preview">
      <ModalWindow open={openEditModal} onClose={handleCloseEditModal}>
        <EditMovieModal film={props.film} onEdit={handleEdit} />
      </ModalWindow>
      <ModalWindow open={openDeleteModal} onClose={handleCloseDeleteModal}>
        <DeleteMovieModal onDelete={handleDelete} />
      </ModalWindow>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MySVG />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleOpenEditModal}>Edit</MenuItem>
        <MenuItem onClick={handleOpenDeleteModal}>Delete</MenuItem>
      </Menu>
      <img
        className="item-preview__poster"
        src={props.film.poster_path}
        alt={props.film.title}
      />
      <div className="item-preview__title">
        <div>
          <h3>{props.film.title}</h3>
        </div>
        <div>
          <span className="item-preview__release-date">
            {props.film.release_date}
          </span>
        </div>
      </div>
      <div className="item-preview__genres">
        {props.film.genres.join(" & ")}
      </div>
    </div>
  );
};

export default FilmPreview;
