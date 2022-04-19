import React, { useState, useRef, useEffect } from "react";
import { useArchive } from "../../../context/ArchiveContext";
import { useNotes } from "../../../context/NotesContext";
import { useTrash } from "../../../context/TrashContext";
import { deleteNote } from "../../../utilities/allNotes-utils";
import { addToArchives } from "../../../utilities/archives-utils";
import { colors } from "../../../utilities/helper-utils";
import { NoteModal } from "../../note-modal/NoteModal";
import { BsPinAngle } from "react-icons/bs";
import { BsPinAngleFill } from "react-icons/bs";
import "./NoteCard.scss";
const NoteCard = ({ note }) => {
  const bodyRef = useRef(null);
  const [toggleModal, setToggleModal] = useState(false);
  const { setTrash } = useTrash();
  const { setNotes } = useNotes();
  const { setArchives } = useArchive();
  const { _id, color } = note;

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
        <h3 className="w50 mg-bottom-1">
          <span className="font-lg icon-hash">#</span>
          {note.title}
        </h3>
        <button onClick={togglePin} className="border-reset font-lg-m pointer">
          {note.isPinned ? <BsPinAngleFill /> : <BsPinAngle />}
        </button>
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
          <button
            className="border-reset"
            onClick={() => setToggleModal((val) => !val)}
          >
            <span className="material-icons icon">edit</span>
          </button>
          {toggleModal && (
            <NoteModal toggleModal={setToggleModal} editId={note._id} />
          )}
          <button
            className="border-reset"
            onClick={() => addToArchives(note._id, note, setNotes, setArchives)}
          >
            <span className="material-icons icon pointer">archive</span>
          </button>
          <button
            className="border-reset"
            onClick={() => {
              setTrash((trashNotes) => [...trashNotes, note]);
              deleteNote(note._id, setNotes);
            }}
          >
            <span className="material-icons icon">delete</span>
          </button>
        </div>
      </footer>
    </section>
  );
};

export { NoteCard };
