import React, { useState } from "react";
import "./NoteModal.scss";
const NoteModal = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  return (
    <div className="fixed-container">
      <div className="note-modal">
        <div className="mg-1 flex-spBt-center">
          <input
            placeholder="title"
            className="reset-input"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <i class="fa-solid fa-thumbtack"></i>
        </div>
        <div className="note-body mg-1">
          <div>icons</div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="reset-input"
            placeholder="Write your note here ."
            value={noteBody}
            onChange={(e) => setNoteBody(e.target.value)}
          ></textarea>
        </div>
        <footer>color label</footer>
      </div>
    </div>
  );
};

export { NoteModal };
