import React from "react";
import { useNotes } from "../../context/NotesContext";
import { NoteCard } from "./note-card/NoteCard";
import noteImgBg from "../../assets/note-img.svg";
import { useFilters } from "../../context/FiltersContext";
import {
  getFilteredNotes,
  getSortedNotes,
} from "../../utilities/filters-utils";

const NotesListing = () => {
  const { notes } = useNotes();
  const { filtersState } = useFilters();
  const { sortBy, priority, label } = filtersState;

  const sortedNotes = getSortedNotes(notes, sortBy);
  const filteredNotes = getFilteredNotes(sortedNotes, priority, label);

  const pinnedNotes = filteredNotes?.filter((note) => note.isPinned);
  const otherNotes = filteredNotes?.filter((note) => !note.isPinned);

  return (
    <div className="pd-1 ">
      {!notes.length ? (
        <div className="dim-6">
          <img src={noteImgBg} className="bg-img" alt="notes bg image" />
          <h2 className="txt-center">Add your Jot's !</h2>
        </div>
      ) : (
        <>
          {pinnedNotes.length !== 0 && (
            <>
              <h5 className=" w70 dim-5">PINNED</h5>
              {pinnedNotes.map((note) => (
                <NoteCard note={note} key={note._id} />
              ))}
            </>
          )}
          {otherNotes.length !== 0 && (
            <>
              <h5 className=" w70 dim-5">OTHERS</h5>
              {otherNotes.map((note) => (
                <NoteCard note={note} key={note._id} />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export { NotesListing };
