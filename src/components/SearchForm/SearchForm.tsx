import React from "react";

import SearchInput from "../SearchInput/SearchInput";

import "./SearchForm.scss";

const SearchForm: React.FC = () => {
  return (
    <div className="search-form">
      <h1>FIND YOUR MOVIE</h1>
      <SearchInput />
    </div>
  );
};

export default SearchForm;
