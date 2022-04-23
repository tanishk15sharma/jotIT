import React, { useState } from "react";
import { BsFilterSquareFill } from "react-icons/bs";
import { Filters } from "../filters/Filters";

const Search = () => {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className=" w60 mg-auto flex-spBt-end mg-top-1 border-bottom relative">
      <input placeholder="Search" className="reset-input_xl w80 mg-left-03" />
      <button
        className="font-lg border-reset flex"
        onClick={() => setShowFilters((val) => !val)}
      >
        <BsFilterSquareFill />
      </button>
      {showFilters ? <Filters /> : null}
    </div>
  );
};

export { Search };
