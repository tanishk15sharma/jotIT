import React, { useState, useRef, useEffect } from "react";
import { useArchive } from "../../../context/ArchiveContext";
import { useNotes } from "../../../context/NotesContext";
import { useTrash } from "../../../context/TrashContext";
import { useAuth } from "../../../context/AuthContext";
import { deleteNote } from "../../../utilities/allNotes-utils";
import { addToArchives } from "../../../utilities/archives-utils";
import { colors } from "../../../utilities/helper-utils";
import { NoteModal } from "../../note-modal/NoteModal";
import { BsPinAngle } from "react-icons/bs";
import { BsPinAngleFill } from "react-icons/bs";
import { Tooltip } from "../../tooltip/Tooltip";
import "./NoteCard.scss";
import toast from "react-hot-toast";
const NoteCard = ({ note }) => {
  const bodyRef = useRef(null);
  const [toggleModal, setToggleModal] = useState(false);
  const { auth } = useAuth();
  const { setTrash } = useTrash();
  const { setNotes } = useNotes();
  const { setArchives } = useArchive();
  const { _id } = note;

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.innerHTML = note.body;
    }
  }, [bodyRef, note]);

  const togglePin = () => {
    setNotes((notes) =>
      notes.map((note) =>
        note._id === _id ? { ...note, isPinned: !note.isPinned } : note
      )
    );
    toast.success("Updated");
  };

  const copyLink = () => {
    toast.success("Copied!");
    navigator.clipboard.writeText(note.title);
  };

  return (
    <section className={`mg-bottom-1  bg-${colors[note.color]}`}>
      <span className={`note-priority    ${note.priority}`}>
        {" "}
        {note.priority}{" "}
      </span>
      <div className="flex-spBt pd-top-1">
        <h3 className="w50 mg-bottom-1">
          <Tooltip content="Copy Title" direction="left">
            <span className="font-xl icon-hash pointer" onClick={copyLink}>
              #
            </span>
          </Tooltip>
          {note.title}
        </h3>
        <button onClick={togglePin} className="border-reset font-lg pointer">
          {note.isPinned ? (
            <Tooltip content="Unpin">
              <BsPinAngleFill />
            </Tooltip>
          ) : (
            <Tooltip content="Pin">
              <BsPinAngle />
            </Tooltip>
          )}
        </button>
      </div>
      <p ref={bodyRef} className="w100">
        {note.body}
      </p>
      <div className="mg-top-2">
        {note.tags.map((labelTag) => (
          <span key={labelTag} className="labelTag">
            {labelTag}
          </span>
        ))}
      </div>
      <footer className="note-footer">
        <span className="font-sm"> {new Date(note.date).toDateString()} </span>
        <div className="note-options-div">
          <Tooltip content="Edit">
            <button
              className="border-reset card-icon-btn"
              onClick={() => setToggleModal((val) => !val)}
            >
              <span className="material-icons">edit</span>
            </button>
          </Tooltip>
          {toggleModal && (
            <NoteModal toggleModal={setToggleModal} editId={note._id} />
          )}
          <Tooltip content="Archive">
            <button
              className="border-reset card-icon-btn"
              onClick={() =>
                addToArchives(
                  note._id,
                  note,
                  setNotes,
                  setArchives,
                  auth.encodedToken
                )
              }
            >
              <span className="material-icons  ">archive</span>
            </button>
          </Tooltip>
          <Tooltip content="Delete">
            <button
              className="border-reset card-icon-btn"
              onClick={() => {
                setTrash((trashNotes) => [...trashNotes, note]);
                deleteNote(note._id, setNotes, auth.encodedToken);
              }}
            >
              <span className="material-icons ">delete</span>
            </button>
          </Tooltip>
        </div>
      </footer>
    </section>
  );
};

export { NoteCard };
