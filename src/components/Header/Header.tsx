import React from "react";
import Button from "../Button/Button";
import SearchForm from "../SearchForm/SearchForm";

import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="logo">NETFLIX ROULETTE</div>
      <div className="add-button">
        <Button title="+ ADD MOVIE" theme="grey"></Button>
      </div>
      <SearchForm />
    </header>
  );
};

export default Header;
