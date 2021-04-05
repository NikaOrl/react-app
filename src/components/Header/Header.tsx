import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import AddMovieModal from "../AddMovieModal/AddMovieModal";
import Button from "../Button/Button";
import SearchForm from "../SearchForm/SearchForm";
import ModalWindow from "../ModalWindow/ModalWindow";
import FilmItem from "../FilmItem/FilmItem";

import "./Header.scss";

const Header: React.FC = () => {
  let history = useHistory();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openSearch = () => {
    history.push("/");
  };

  return (
    <header>
      <Switch>
        <Route path="/film/:id">
          <div className="header-links">
            <div className="header-links__logo">NETFLIX ROULETTE</div>
            <Button title="Search" theme="grey" onClick={openSearch}></Button>
          </div>
          <FilmItem />
        </Route>

        <Route exact path={["/", "/search/:search"]}>
          <ModalWindow open={open} onClose={handleClose}>
            <AddMovieModal onAdd={handleClose} />
          </ModalWindow>
          <div className="header-links">
            <div className="header-links__logo">NETFLIX ROULETTE</div>
            <Button title="+ ADD MOVIE" theme="grey" onClick={handleOpen} />
          </div>
          <SearchForm />
        </Route>
      </Switch>
    </header>
  );
};

export default Header;
