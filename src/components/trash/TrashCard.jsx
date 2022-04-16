import React, { useRef, useEffect } from "react";
import { useTrash } from "../../context/TrashContext";
import { deleteTrashNote } from "../../utilities/trash-utils";

const TrashCard = ({ note }) => {
  const { trash, setTrash } = useTrash();

  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.innerHTML = note.body;
    }
  }, [bodyRef, note]);
  console.log(trash);
  return (
    <section className="mg-bottom-1">
      <div className="flex-spBt pd-top-1">
        <h3 className="w50 mg-bottom-1"> {note.title} </h3>
      </div>
      <p ref={bodyRef} className="w100">
        {note.body}
      </p>
      <footer className="note-footer">
        <span className="font-sm"> {new Date(note.date).toDateString()} </span>
        <div>
          <span class="material-icons">restore_from_trash</span>
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
