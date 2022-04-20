import React from "react";
import { useLabels } from "../../context/LabelContext";
import "./Label.scss";
import { LabelContainer } from "../../components/label/LabelContainer";
const Label = () => {
  const { labels } = useLabels();
  return (
    <div className="w100">
      {labels.map((label) => (
        <LabelContainer label={label} key={label} />
      ))}
    </div>
  );
};

export { Label };
