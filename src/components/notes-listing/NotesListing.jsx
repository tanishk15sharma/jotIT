import React from "react";
import { NoteCard } from "./note-card/NoteCard";
import "./NotesListing.scss";
const NotesListing = () => {
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
