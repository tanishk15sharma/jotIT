import React, { useState } from "react";
import { BsFilterSquareFill } from "react-icons/bs";
import { useFilters } from "../../context/FiltersContext";
import { Filters } from "../filters/Filters";

const Search = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { filtersDispatch } = useFilters();
  return (
    <div className=" w60 mg-auto flex-spBt-end mg-top-1 border-bottom relative">
      <input
        placeholder="Search"
        className="reset-input_xl w80 mg-left-03"
        onChange={(e) =>
          filtersDispatch({ type: "SEARCH_NOTE", payload: e.target.value })
        }
      />
      <button
        className="font-lg border-reset flex pointer"
        onClick={() => setShowFilters((val) => !val)}
      >
        <BsFilterSquareFill />
      </button>
      {showFilters ? <Filters /> : null}
    </div>
  );
};

export { Search };
