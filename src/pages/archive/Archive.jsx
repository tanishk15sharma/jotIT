import React, { useRef, useEffect } from "react";
import { useArchive } from "../../context/ArchiveContext";
import { useNotes } from "../../context/NotesContext";
import { restoreNote } from "../../utilities/archives-utils";

const Archive = () => {
  const { archives, setArchives } = useArchive();
  const { setNotes } = useNotes();
  const bodyRef = useRef(null);

  // useEffect(() => {
  //   if (bodyRef.current) {
  //     bodyRef.current.innerHTML = note.body;
  //   }
  // }, [bodyRef, note]);

  return (
    <div className="w100">
      {archives.map((note) => {
        return (
          <section className="mg-bottom-1 ">
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
              <span className="font-sm">
                {new Date(note.date).toDateString()}
              </span>
              <div>
                <span
                  class="material-icons pointer"
                  onClick={() => restoreNote(note._id, setNotes, setArchives)}
                >
                  unarchive
                </span>
                <span
                  className="material-icons icon"
                  onClick={() => {
                    // addNote(note, setNotes);
                  }}
                >
                  delete
                </span>
              </div>
            </footer>
          </section>
        );
      })}
    </div>
  );
};

export { Archive };
