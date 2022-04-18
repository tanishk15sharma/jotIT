import React, { useState, useRef, useEffect } from "react";
import { useArchive } from "../../../context/ArchiveContext";
import { useNotes } from "../../../context/NotesContext";
import { useTrash } from "../../../context/TrashContext";
import { deleteNote } from "../../../utilities/allNotes-utils";
import { addToArchives } from "../../../utilities/archives-utils";
import { colors } from "../../../utilities/helper-utils";
import { NoteModal } from "../../note-modal/NoteModal";
import "./NoteCard.scss";
const NoteCard = ({ note }) => {
  const bodyRef = useRef(null);
  const [toggleModal, setToggleModal] = useState(false);
  const { setTrash } = useTrash();
  const { setNotes } = useNotes();
  const { setArchives } = useArchive();
  const { _id } = note;

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.innerHTML = note.body;
    }
  }, [bodyRef, note]);

  const togglePin = () => {
    setNotes((notes) =>
      notes.map((note) =>
        note._id === _id ? { ...note, isPinned: !note.isPinned } : note
      )
    );
  };

  return (
    <section className={`mg-bottom-1  bg-${colors[note.color]}`}>
      <div className="flex-spBt pd-top-1">
        <h3 className="w50 mg-bottom-1"> {note.title} </h3>
        <span className="material-icons icon rotate-left" onClick={togglePin}>
          push_pin
        </span>
      </div>
      <p ref={bodyRef} className="w100">
        {note.body}
      </p>
      <div className="mg-top-2">
        {note.tags.map((labelTag) => (
          <span key={labelTag} className="labelTag">
            {labelTag}
          </span>
        ))}
      </div>
      <footer className="note-footer">
        <span className="font-sm"> {new Date(note.date).toDateString()} </span>
        <div>
          <button className="border-reset">
            <span
              className="material-icons icon"
              onClick={() => setToggleModal((val) => !val)}
            >
              edit
            </span>
          </button>
          {toggleModal && (
            <NoteModal toggleModal={setToggleModal} editId={note._id} />
          )}

          <span
            className="material-icons icon pointer"
            onClick={() => addToArchives(note._id, note, setNotes, setArchives)}
          >
            archive
          </span>
          <span
            className="material-icons icon"
            onClick={() => {
              setTrash((trashNotes) => [...trashNotes, note]);
              deleteNote(note._id, setNotes);
            }}
          >
            delete
          </span>
        </div>
      </footer>
    </section>
  );
};

export { NoteCard };
