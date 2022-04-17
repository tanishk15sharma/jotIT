import React, { useState } from "react";
import { useLabels } from "../../context/LabelContext";
import "./LabelModal.scss";
const LabelModal = () => {
  const { labels, setLabels } = useLabels();
  const [lableName, setLableName] = useState("");
  const addNewLabel = () => {
    if (
      labels.some(
        (label) => label.toLowerCase() === lableName.toLocaleLowerCase()
      )
    ) {
      alert("Label already exixts");
      return;
    }
    if (!lableName) {
      alert("Write label Name");
      return;
    }
    setLabels((options) => [...options, lableName]);
    setLableName("");
  };

  return (
    <div className="labelModal pd fixed-w150 box-shadow-light">
      <div className="flex-spBt border-bottom mg-bottom-1">
        <input
          type="text"
          className="w70 border-reset reset-input"
          placeholder="Add label"
          value={lableName}
          onChange={(e) => setLableName(e.target.value)}
        />
        <span className="material-icons pointer" onClick={addNewLabel}>
          add
        </span>
      </div>
      <div className="flex-cl">
        {labels.map((option, index) => (
          <label key={index} htmlFor={option} className="flex-center">
            <input type="checkbox" id={option} /> {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export { LabelModal };
