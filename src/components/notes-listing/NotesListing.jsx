import React from "react";
import { useNotes } from "../../context/NotesContext";
import { NoteCard } from "./note-card/NoteCard";
import "./NotesListing.scss";
const NotesListing = () => {
  const { notes } = useNotes();
  console.log(notes);

  return (
    <div className="NotesListing ">
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </div>
  );
};

export { NotesListing };
