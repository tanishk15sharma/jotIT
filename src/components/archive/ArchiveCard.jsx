import React, { useRef, useEffect } from "react";
import { useArchive } from "../../context/ArchiveContext";
import { useNotes } from "../../context/NotesContext";
import { useTrash } from "../../context/TrashContext";
import { useAuth } from "../../context/AuthContext";
import { deleteFromArchive, restoreNote } from "../../utilities/archives-utils";
import { colors } from "../../utilities/helper-utils";
import { Tooltip } from "../tooltip/Tooltip";
const ArchiveCard = ({ note }) => {
  const { setArchives } = useArchive();
  const { setNotes } = useNotes();
  const { setTrash } = useTrash();
  const { auth } = useAuth();
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.innerHTML = note.body;
    }
  }, [bodyRef, note]);

  return (
    <section className={`mg-bottom-1  bg-${colors[note.color]}`} key={note._id}>
      <span className={`note-priority    ${note.priority}`}>
        {note.priority}
      </span>
      <div className="flex-spBt pd-top-1">
        <h3 className="w50 mg-bottom-1"> {note.title} </h3>
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
        <span className="font-sm">{new Date(note.date).toDateString()}</span>

        <div>
          <Tooltip content="Unarchive">
            <button className="border-reset pointer">
              <span
                className="material-icons icon"
                onClick={() =>
                  restoreNote(
                    note._id,
                    setNotes,
                    setArchives,
                    auth.encodedToken
                  )
                }
              >
                unarchive
              </span>
            </button>
          </Tooltip>
          <Tooltip content="Delete">
            <button className="border-reset pointer mg-left-p5">
              <span
                className="material-icons icon"
                onClick={() => {
                  deleteFromArchive(note._id, setArchives, auth.encodedToken);
                  setTrash((trashNotes) => [...trashNotes, note]);
                }}
              >
                delete
              </span>
            </button>
          </Tooltip>
        </div>
      </footer>
    </section>
  );
};

export { ArchiveCard };
