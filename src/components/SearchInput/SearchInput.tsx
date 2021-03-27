import React from "react";

import Button from "../Button/Button";

import "./SearchInput.scss";

const SearchInput: React.FC = () => {
  return (
    <div className="search">
      <div className="search__input-group">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search"
          className="search__input"
        />
        <div className="search__bottom-border" />
      </div>
      <div className="search__form-btn">
        <Button title="SEARCH" width="240px" height="59px" />
      </div>
    </div>
  );
};

export default SearchInput;
