import React from "react";
import { useLabels } from "../../context/LabelContext";
import "./Filters.scss";
const Filters = () => {
  const { labels } = useLabels();

  return (
    <div className="filter-container">
      <div className="flex-spBt">
        <h5 className="mg-bottom-05">SORT BY</h5>
        <h5>CLEAR ALL</h5>
      </div>
      <div className="font-sm mg-bottom-05 ">
        <input id="latestDate" type="radio" name="date" />
        <label htmlFor="latestDate" className="mg-left-03">
          Latest Note
        </label>
      </div>
      <div className="font-sm mg-bottom-05 ">
        <input id="oldestDate" type="radio" name="date" />
        <label htmlFor="oldestDate" className="mg-left-03">
          Oldest Note
        </label>
      </div>

      <div className="flex-spBt-end mg-bottom-1">
        <h5>PRIORITY</h5>
        <select name="" id="" className="filters-select">
          <option value="high">HIGH</option>
          <option selected value="medium">
            MEDIUM
          </option>
          <option value="low">LOW</option>
        </select>
      </div>
      <div className="flex-spBt-end mg-bottom-1">
        <h5>LABEL</h5>
        <select name="labels" id="" className="filters-select">
          <option value="">Please select</option>
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
