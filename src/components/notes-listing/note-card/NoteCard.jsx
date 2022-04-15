import React from "react";
import "./NoteCard.scss";
const NoteCard = () => {
  return (
    <section className="mg-b-1">
      <div className="flex-spBt pd-top-1">
        <h3 className="w50 mg-b-1">TITLE</h3>
        <span className="material-icons icon rotate-left"> push_pin </span>
      </div>
      <p class="w100">
        Body of the aaaaaaanoteBody of the aaaaaaanoteBody of the
      </p>
      <footer className="note-footer">
        <span className="font-sm">05/04/2022</span>
        <div>
          <span className="material-icons icon"> edit </span>
          <span className="material-icons icon"> palette </span>
          <span className="material-icons icon">label </span>
          <span className="material-icons icon"> archive </span>
          <span className="material-icons icon"> delete </span>
        </div>
      </footer>
    </section>
  );
};

export { NoteCard };
