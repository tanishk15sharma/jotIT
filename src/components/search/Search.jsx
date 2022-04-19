import React from "react";

const Search = () => {
  return (
    <div className="search-container w80 flex-center mg-auto mg-top-1 border-bottom">
      <i className="fa-solid fa-magnifying-glass "></i>
      <input placeholder="Search" className="reset-input_xl w80 mg-left-p3" />
    </div>
  );
};

export { Search };
