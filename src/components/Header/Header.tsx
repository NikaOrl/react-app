import React from "react";

import AddMovieModal from "../AddMovieModal/AddMovieModal";
import Button from "../Button/Button";
import SearchForm from "../SearchForm/SearchForm";
import ModalWindow from "../ModalWindow/ModalWindow";
import FilmItem from "../FilmItem/FilmItem";

import "./Header.scss";

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header>
      <div className="header-links">
        <div className="header-links__logo">NETFLIX ROULETTE</div>
        <Button title="Search" theme="grey"></Button>
      </div>

      <ModalWindow open={open} onClose={handleClose}>
        <AddMovieModal onAdd={handleClose} />
      </ModalWindow>
      <div className="add-button">
        <Button title="+ ADD MOVIE" theme="grey" onClick={handleOpen} />
      </div>
      <SearchForm />
      <FilmItem />
    </header>
  );
};

export default Header;
