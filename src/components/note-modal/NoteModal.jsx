import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNotes } from "../../context/NotesContext";
import { addNote, editNote } from "../../utilities/allNotes-utils";
import { colors } from "../../utilities/helper-utils";
import { LabelModal } from "../label-modal/LabelModal";
import "./NoteModal.scss";
const NoteModal = ({ toggleModal, editId }) => {
  const { notes, setNotes } = useNotes();
  const [toggleLableModal, setToggleLableModal] = useState(false);
  const [noteDetails, setNoteDetails] = useState({
    title: "",
    body: "",
    color: "",
    isPinned: false,
    tags: [],
    priority: "Medium",
    date: Date.now(),
  });
  const [currColor, setCurrColor] = useState(0);

  useEffect(() => {
    if (editId) {
      let selectedNote = notes.find((note) => note._id === editId);
      console.log(selectedNote);
      setNoteDetails({ ...selectedNote });
    }
  }, [editId]);

  return (
    <main className="fixed-container" onClick={() => toggleModal(false)}>
      <div
        className={`note-modal bg-${colors[currColor]}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mg-1 flex-spBt-center">
          <input
            placeholder="Title"
            className="reset-input_xl bg-none"
            value={noteDetails.title || ""}
            onChange={(e) =>
              setNoteDetails((details) => ({
                ...details,
                title: e.target.value,
              }))
            }
          />
          <span
            className="material-icons  rotate-left pointer"
            onClick={() =>
              setNoteDetails((details) => ({
                ...details,
                isPinned: !details.isPinned,
              }))
            }
          >
            push_pin
          </span>
        </div>
        <ReactQuill
          theme="snow"
          value={noteDetails.body || ""}
          className="mg-1"
          onChange={(value) =>
            setNoteDetails((details) => ({ ...details, body: value }))
          }
          modules={NoteModal.modules}
          formats={NoteModal.formats}
          placeholder="Write something........"
        />
        <div className="mg-1">
          {noteDetails.tags.map((labelTag, index) => (
            <span key={index} className="labelTag">
              {labelTag}
            </span>
          ))}
        </div>
        <footer className="modal-footer mg-1 relative">
          <select
            name="priority"
            className="border-none pointer bg-none"
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
          <span
            className="material-icons pd-rl-1 pointer"
            onClick={() => {
              currColor === 6
                ? setCurrColor(0)
                : setCurrColor((previousColor) => previousColor + 1);
            }}
          >
            palette
          </span>
          <span
            className="material-icons pointer"
            onClick={() => setToggleLableModal((val) => !val)}
          >
            label
          </span>
          {toggleLableModal && (
            <LabelModal
              noteDetails={noteDetails}
              setNoteDetails={setNoteDetails}
            />
          )}

          {!editId ? (
            <button
              disabled={!noteDetails.title}
              className="border-reset mg-left-1 pointer"
              onClick={() => {
                addNote(noteDetails, setNotes);
                toggleModal(false);
              }}
            >
              Save
            </button>
          ) : (
            <button
              disabled={!noteDetails.title}
              className="border-reset mg-left-1 pointer"
              onClick={() => {
                editNote(editId, noteDetails, setNotes);
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
    [{ align: [] }],
    [{ color: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "code-block"],
    ["clean"],
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
