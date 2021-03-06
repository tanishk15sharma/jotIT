import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNotes } from "../../context/NotesContext";
import { addNote, editNote } from "../../utilities/allNotes-utils";
import { colors } from "../../utilities/helper-utils";
import { LabelModal } from "../label/LabelModal";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdLabelOutline } from "react-icons/md";
import { BsPinAngle } from "react-icons/bs";
import { BsPinAngleFill } from "react-icons/bs";

import "./NoteModal.scss";
import { Tooltip } from "../tooltip/Tooltip";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
const NoteModal = ({ toggleModal, editId }) => {
  const { auth } = useAuth();
  const { notes, setNotes } = useNotes();
  const [toggleLableModal, setToggleLableModal] = useState(false);
  const [noteDetails, setNoteDetails] = useState({
    title: "",
    body: "",
    color: 0,
    isPinned: false,
    tags: [],
    priority: "Medium",
    date: Date.now(),
  });

  useEffect(() => {
    if (editId) {
      let selectedNote = notes.find((note) => note._id === editId);
      setNoteDetails({ ...selectedNote });
    }
  }, [editId]);

  return (
    <main className="fixed-container" onClick={() => toggleModal(false)}>
      <div
        className={`note-modal bg-${colors[noteDetails.color]}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative priorityBatch">
          <div className={`modal-priority  ${noteDetails.priority}`}>
            {noteDetails.priority}
          </div>
        </div>
        <div className="mg-1 mg-top0 flex-spBt-center">
          <label htmlFor="title">
            <span className="font-xl icon-hash">#</span>
            <input
              placeholder="Title"
              id="title"
              className="reset-input_xl bg-none"
              value={noteDetails.title || ""}
              onChange={(e) =>
                setNoteDetails((details) => ({
                  ...details,
                  title: e.target.value,
                }))
              }
            />
          </label>
          <button
            onClick={() => {
              setNoteDetails((details) => ({
                ...details,
                isPinned: !details.isPinned,
              }));
              toast.success("Updated!");
            }}
            className="border-reset font-lg pointer"
          >
            {noteDetails.isPinned ? (
              <Tooltip content="Unpin" direction="left">
                <BsPinAngleFill />
              </Tooltip>
            ) : (
              <Tooltip content="Pin" direction="left">
                <BsPinAngle />
              </Tooltip>
            )}
          </button>
        </div>
        <ReactQuill
          theme="snow"
          value={noteDetails.body || ""}
          className="mg-1 flow-auto"
          onChange={(value) =>
            setNoteDetails((details) => ({ ...details, body: value }))
          }
          modules={NoteModal.modules}
          formats={NoteModal.formats}
          placeholder="Write something........!"
        />
        <div className="mg-1">
          {noteDetails.tags.map((labelTag, index) => (
            <span key={index} className="labelTag">
              {labelTag}
            </span>
          ))}
        </div>
        <footer className="modal-footer mg-1 ">
          <Tooltip content="Priority">
            <select
              name="priority"
              className="border-none pointer bg-none font-l"
              onChange={(e) =>
                setNoteDetails((details) => ({
                  ...details,
                  priority: e.target.value,
                }))
              }
              value={noteDetails.priority}
            >
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="low">Low</option>
            </select>
          </Tooltip>
          <Tooltip content="Color">
            <button
              className="border-reset  pd-rl-1 pointer font-lg  flex "
              onClick={() => {
                setNoteDetails((details) => ({
                  ...details,
                  color: details.color === 6 ? 0 : details.color + 1,
                }));
              }}
            >
              <IoColorPaletteOutline />
            </button>
          </Tooltip>
          <Tooltip content="Label">
            <button
              className="border-reset  pointer font-lg flex "
              onClick={() => setToggleLableModal((val) => !val)}
            >
              <MdLabelOutline />
            </button>
          </Tooltip>
          {toggleLableModal && (
            <LabelModal
              noteDetails={noteDetails}
              setNoteDetails={setNoteDetails}
            />
          )}

          {!editId ? (
            <button
              disabled={!noteDetails.title}
              className="border-reset mg-left-1 pointer font-l "
              onClick={() => {
                addNote(noteDetails, setNotes, auth.encodedToken);
                toggleModal(false);
              }}
            >
              Save
            </button>
          ) : (
            <button
              disabled={!noteDetails.title}
              className="border-reset mg-left-1 pointer font-l"
              onClick={() => {
                editNote(editId, noteDetails, setNotes, auth.encodedToken);
                toggleModal(false);
              }}
            >
              Update
            </button>
          )}
        </footer>
      </div>
    </main>
  );
};

export { NoteModal };
NoteModal.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    // [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],

    [{ color: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "code-block"],
  ],
};
NoteModal.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];
