import React from "react";
import { useFilters } from "../../context/FiltersContext";
import { useLabels } from "../../context/LabelContext";
import "./Filters.scss";
const Filters = () => {
  const { labels } = useLabels();
  const { filtersState, filtersDispatch } = useFilters();

  return (
    <div className="filter-container">
      <div className="flex-spBt">
        <h5 className="mg-bottom-05">SORT BY</h5>
        <button
          className="border-reset pointer"
          onClick={() => filtersDispatch({ type: "CLEAR_ALL" })}
        >
          <h5>CLEAR ALL</h5>
        </button>
      </div>
      <div className="font-sm mg-bottom-05 ">
        <input
          id="latestDate"
          type="radio"
          name="date"
          value="latestDate"
          onChange={(e) =>
            filtersDispatch({ type: "SORT_BY", payload: e.target.value })
          }
        />
        <label htmlFor="latestDate" className="mg-left-03">
          Latest Note
        </label>
      </div>
      <div className="font-sm mg-bottom-05 ">
        <input
          id="oldestDate"
          type="radio"
          name="date"
          value="oldestDate"
          onChange={(e) =>
            filtersDispatch({ type: "SORT_BY", payload: e.target.value })
          }
        />
        <label htmlFor="oldestDate" className="mg-left-03">
          Oldest Note
        </label>
      </div>

      <div className="flex-spBt-end mg-bottom-1">
        <h5>PRIORITY</h5>
        <select
          name=""
          id=""
          className="filters-select"
          onChange={(e) =>
            filtersDispatch({ type: "PRIORITY", payload: e.target.value })
          }
        >
          <option selected disabled>
            All
          </option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div className="flex-spBt-end mg-bottom-1">
        <h5>LABEL</h5>
        <select
          name="labels"
          id=""
          className="filters-select"
          onChange={(e) =>
            filtersDispatch({ type: "LABEL", payload: e.target.value })
          }
        >
          <option value="" selected disabled>
            Please select
          </option>
          {labels.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export { Filters };
