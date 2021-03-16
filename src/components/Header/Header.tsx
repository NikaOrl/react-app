import React from "react";

import AddMovieModal from "../AddMovieModal/AddMovieModal";
import Button from "../Button/Button";
import SearchForm from "../SearchForm/SearchForm";
import ModalWindow from "../ModalWindow/ModalWindow";
import FilmItem from "../FilmItem/FilmItem";
import { IFilm } from "../../models/film.model";

import "./Header.scss";

interface HeaderProps {
  handleAdd: (film: IFilm) => void;
}

const Header = (props: HeaderProps) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onAdd = (film: IFilm) => {
    props.handleAdd(film);
    handleClose();
  };

  return (
    <header>
      <div className="logo">NETFLIX ROULETTE</div>
      {/* <ModalWindow open={open} onClose={handleClose}>
        <AddMovieModal onAdd={onAdd} />
      </ModalWindow>
      <div className="add-button">
        <Button title="+ ADD MOVIE" theme="grey" onClick={handleOpen} />
      </div>
      <SearchForm /> */}
      <FilmItem />
    </header>
  );
};

export default Header;
