import React, { useState } from "react";
import { useNotes } from "../../../context/NotesContext";
import { deleteNote } from "../../../utilities/allNotes-utils";
import { NoteModal } from "../../note-modal/NoteModal";
import "./NoteCard.scss";
const NoteCard = ({ note }) => {
  const [toggleModal, setToggleModal] = useState(false);

  const { setNotes } = useNotes();
  return (
    <section className="mg-bottom-1">
      <div className="flex-spBt pd-top-1">
        <h3 className="w50 mg-bottom-1"> {note.title} </h3>
        <span className="material-icons icon rotate-left"> push_pin </span>
      </div>
      <p className="w100">{note.body}</p>
      <footer className="note-footer">
        <span className="font-sm">05/04/2022</span>
        <div>
          <span
            className="material-icons icon"
            onClick={() => setToggleModal((val) => !val)}
          >
            edit
          </span>
          {toggleModal && (
            <NoteModal toggleModal={setToggleModal} editId={note._id} />
          )}

          <span className="material-icons icon"> palette </span>
          <span className="material-icons icon">label </span>
          <span className="material-icons icon"> archive </span>
          <span
            className="material-icons icon"
            onClick={() => deleteNote(note._id, setNotes)}
          >
            delete
          </span>
        </div>
      </footer>
    </section>
  );
};

export { NoteCard };
