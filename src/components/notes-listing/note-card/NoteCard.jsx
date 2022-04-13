import React from "react";
import "./NoteCard.scss";
const NoteCard = () => {
  return (
    <section className="mg-b-1">
      <div class="flex-spBt pd-top-1">
        <h3 class="w50 mg-b-1">TITLE</h3>
        <span class="material-icons icon rotate-left"> push_pin </span>
      </div>
      <p class="w100">
        Body of the aaaaaaanoteBody of the aaaaaaanoteBody of the
      </p>
      <footer class="note-footer">
        <span className="font-sm">05/04/2022</span>
        <div>
          <span class="material-icons icon"> edit </span>
          <span class="material-icons icon"> palette </span>
          <span class="material-icons icon">label </span>
          <span class="material-icons icon"> archive </span>
          <span class="material-icons icon"> delete </span>
        </div>
      </footer>
    </section>
  );
};

export { NoteCard };
