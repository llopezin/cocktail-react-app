import React, { useState } from "react";
import "./search.css";

function Search({ search, results }) {
  const [value, setValue] = useState("");

  const handleInput = (searchValue) => {
    setValue(searchValue);
    search(searchValue);
  };

  return (
    <div className="search">
      <input
        className="search__text-input"
        type="text"
        name=""
        id="search"
        placeholder="Type cocktail or ingredient"
        value={value}
        autoComplete="off"
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      />
      <ul className="search__results">
        {results.map((cocktail) => (
          <li className="search__results__item" key={cocktail.id}>
            {cocktail.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
