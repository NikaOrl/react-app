import React, { ChangeEvent, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Button from "../Button/Button";

import "./SearchInput.scss";

const SearchInput: React.FC = () => {
  let { search } = useParams() as { search: string };

  let history = useHistory();

  const [value, setValue] = useState<string>(search ? search : "");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const changeSearch = () => {
    if (value.length > 0) {
      history.push(`/search/${value}`);
    } else {
      history.push("/");
    }
  };

  return (
    <div className="search">
      <div className="search__input-group">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search"
          className="search__input"
          value={value}
          onChange={handleChange}
        />
        <div className="search__bottom-border" />
      </div>
      <div className="search__form-btn">
        <Button
          title="SEARCH"
          width="240px"
          height="59px"
          onClick={changeSearch}
        />
      </div>
    </div>
  );
};

export default SearchInput;
