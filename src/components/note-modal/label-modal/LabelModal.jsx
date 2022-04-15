import React from "react";
import "./LabelModal.scss";
const LabelModal = () => {
  return (
    <div className="labelModal pd fixed-w150 box-shadow-light">
      <div className="flex-spBt border-bottom mg-bottom-1">
        <input
          type="text"
          className="w70 border-reset "
          placeholder="Add label"
        />
        <span className="material-icons">add</span>
      </div>
      <div>nothing here</div>
    </div>
  );
};

export { LabelModal };
