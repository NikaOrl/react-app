import React from "react";

import films from "../../mocks/films.json";

import AddMovieModal from "../AddMovieModal/AddMovieModal";
import Button from "../Button/Button";
import SearchForm from "../SearchForm/SearchForm";
import ModalWindow from "../ModalWindow/ModalWindow";
import { IFilm } from "../FilmPreview/FilmPreview";

import "./Header.scss";
import FilmItem from "../FilmItem/FilmItem";

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
      <FilmItem film={films[0]} />
    </header>
  );
};

export default Header;
