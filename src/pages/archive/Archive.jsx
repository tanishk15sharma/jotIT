import React, { useRef, useEffect } from "react";
import { useArchive } from "../../context/ArchiveContext";
import { useNotes } from "../../context/NotesContext";

const Archive = () => {
  const { archives } = useArchive();

  const bodyRef = useRef(null);

  // useEffect(() => {
  //   if (bodyRef.current) {
  //     bodyRef.current.innerHTML = note.body;
  //   }
  // }, [bodyRef, note]);
  // console.log(archives);
  return (
    <div>
      {archives.map((note) => {
        return (
          <section>
            <h1>aaa</h1>
            <div>
              <h3> {note.title} </h3>
            </div>
            <p ref={bodyRef}>{note.body}</p>
            <div>
              {note.tags.map((labelTag) => (
                <span> {labelTag} </span>
              ))}
            </div>
            <footer>
              <span>{new Date(note.date).toDateString()}</span>
              <div>
                <span>unarchive</span>
                <span
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
