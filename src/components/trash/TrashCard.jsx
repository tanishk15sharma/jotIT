import React, { useRef, useEffect } from "react";

const TrashCard = ({ note }) => {
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.innerHTML = note.body;
    }
  }, [bodyRef, note]);

  return (
    <section className="mg-bottom-1  bg-${colors[currColor]}">
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
          <span className="material-icons icon">delete</span>
        </div>
      </footer>
    </section>
  );
};

export { TrashCard };
