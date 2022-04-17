import React from "react";
import { NoteCard } from "../../components/notes-listing/note-card/NoteCard";
import { useLabels } from "../../context/LabelContext";
import { useNotes } from "../../context/NotesContext";

const Label = () => {
  const { labels } = useLabels();
  const { notes } = useNotes();
  return (
    <div className="w100">
      {labels.map((label) => (
        <div key={label}>
          <h1>{label}</h1>
          {notes.some((note) => note.tags.includes(label)) ? ( //first checking is their any note which has particular label
            notes
              .filter((note) => note.tags.includes(label)) //filtering the labeled array
              .map((note) => <NoteCard note={note} key={note._id} />) //mapping the filtered array
          ) : (
            <h2>no</h2>
          )}
        </div>
      ))}
    </div>
  );
};

export { Label };
