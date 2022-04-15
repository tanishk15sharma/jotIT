import React from "react";
import { useNotes } from "../../context/NotesContext";
import { NoteCard } from "./note-card/NoteCard";
import "./NotesListing.scss";
const NotesListing = () => {
  const { notes } = useNotes();
  console.log(notes);

  return (
    <div className="NotesListing ">
      {notes.map((note) => (
        <NoteCard note={note} key={note._id} />
      ))}
    </div>
  );
};

export { NotesListing };
