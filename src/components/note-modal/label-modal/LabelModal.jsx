import React, { useState } from "react";
import "./LabelModal.scss";
const LabelModal = () => {
  const [lableName, setLableName] = useState("");
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
        <span className="material-icons">add</span>
      </div>
      <div>nothing here</div>
    </div>
  );
};

export { LabelModal };
