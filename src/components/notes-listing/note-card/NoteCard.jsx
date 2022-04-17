import React, { useState, useRef, useEffect } from "react";
import { useNotes } from "../../../context/NotesContext";
import { useTrash } from "../../../context/TrashContext";
import { deleteNote } from "../../../utilities/allNotes-utils";
import { colors } from "../../../utilities/helper-utils";
import { NoteModal } from "../../note-modal/NoteModal";
import "./NoteCard.scss";
const NoteCard = ({ note }) => {
  const [currColor, setCurrColor] = useState(0);
  const bodyRef = useRef(null);
  const [toggleModal, setToggleModal] = useState(false);
  const { setTrash } = useTrash();

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.innerHTML = note.body;
    }
  }, [bodyRef, note]);

  const { setNotes } = useNotes();
  return (
    <section className={`mg-bottom-1  bg-${colors[currColor]}`}>
      <div className="flex-spBt pd-top-1">
        <h3 className="w50 mg-bottom-1"> {note.title} </h3>
        <span className="material-icons icon rotate-left"> push_pin </span>
      </div>
      <p ref={bodyRef} className="w100">
        {note.body}
      </p>
      <div className="mg-top-2">
        {note.tags.map((labelTag) => (
          <span className="labelTag"> {labelTag} </span>
        ))}
      </div>
      <footer className="note-footer">
        <span className="font-sm"> {new Date(note.date).toDateString()} </span>
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

          <span
            className="material-icons icon"
            onClick={() =>
              currColor === 6
                ? setCurrColor(0)
                : setCurrColor((previousColor) => previousColor + 1)
            }
          >
            palette
          </span>
          <span className="material-icons icon">label </span>
          <span className="material-icons icon"> archive </span>
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
