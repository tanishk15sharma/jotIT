import React from "react";
import { useNotes } from "../../context/NotesContext";
import { Toast } from "../toast/Toast";
import { NoteCard } from "./note-card/NoteCard";

const NotesListing = () => {
  const { notes } = useNotes();
  console.log(notes);

  return (
    <div className="pd-1">
      <h2>PINNED</h2>
      {notes?.map(
        (note) => note.isPinned && <NoteCard note={note} key={note._id} />
      )}
      <h2>OTHERS</h2>
      {notes?.map(
        (note) => !note.isPinned && <NoteCard note={note} key={note._id} />
      )}
    </div>
  );
};

export { NotesListing };
