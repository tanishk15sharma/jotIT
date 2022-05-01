import React from "react";
import pageNotFoundGif from "../assets/pagenotfound.gif";
const PageNoteFound = () => {
  return (
    <div className="fixed-container white-bg ">
      <img src={pageNotFoundGif} />
    </div>
  );
};

export { PageNoteFound };
