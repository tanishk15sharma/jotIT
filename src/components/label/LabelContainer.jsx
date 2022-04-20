import React, { useState } from "react";
import { useNotes } from "../../context/NotesContext";
import { NoteCard } from "../notes-listing/note-card/NoteCard";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
const LabelContainer = ({ label }) => {
  const [toggleLabelBox, setToggleLabelBox] = useState(false);
  const { notes } = useNotes();

  return (
    <div className="mg-bottom-2">
      <div
        className="label-container flex-spBt-center mg-bottom-1  pd-rl-1"
        onClick={() => setToggleLabelBox((value) => !value)}
      >
        <h2>{label}</h2>
        <MdOutlineArrowBackIosNew
          className={`${toggleLabelBox ? "rotate-90" : "rotate90"} delay`}
        />
      </div>
      {toggleLabelBox &&
        (notes.some((note) => note.tags.includes(label)) ? (
          notes
            .filter((note) => note.tags.includes(label))
            .map((note) => <NoteCard note={note} key={note._id} />)
        ) : (
          <h5 className="mg-auto  dim-5 underline">
            No Jot Available With This Label.
          </h5>
        ))}
    </div>
  );
};

export { LabelContainer };
