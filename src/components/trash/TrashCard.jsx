import React, { useRef, useEffect } from "react";
import { useNotes } from "../../context/NotesContext";
import { useTrash } from "../../context/TrashContext";
import { addNote } from "../../utilities/allNotes-utils";
import { deleteTrashNote } from "../../utilities/trash-utils";

const TrashCard = ({ note }) => {
  const { setNotes } = useNotes();
  const { setTrash } = useTrash();

  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.innerHTML = note.body;
    }
  }, [bodyRef, note]);

  return (
    <section className="mg-bottom-1">
      <div className="flex-spBt pd-top-1">
        <h3 className="w50 mg-bottom-1"> {note.title} </h3>
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
            className="material-icons pointer"
            onClick={() => {
              addNote(note, setNotes);
              deleteTrashNote(note._id, setTrash);
            }}
          >
            restore_from_trash
          </span>
          <span
            className="material-icons icon"
            onClick={() => deleteTrashNote(note._id, setTrash)}
          >
            delete
          </span>
        </div>
      </footer>
    </section>
  );
};

export { TrashCard };
