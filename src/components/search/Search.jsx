import React from "react";
import "./Search.scss";
const Search = () => {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass font-lg"></i>
      <input placeholder="Search" className="reset-input_xl w80" />
    </div>
  );
};

export { Search };
