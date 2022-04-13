import React from "react";
import "./Search.scss";
const Search = () => {
  return (
    <div className="search-container">
      <i class="fa-solid fa-magnifying-glass font-lg"></i>
      <input placeholder="Search" className="reset-input w80" />
    </div>
  );
};

export { Search };
