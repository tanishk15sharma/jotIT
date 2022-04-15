import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNotes } from "../../context/NotesContext";
import { addNote } from "../../utilities/allNotes-utils";
import { LabelModal } from "./label-modal/LabelModal";

import "./NoteModal.scss";
const NoteModal = ({ toggleModal }) => {
  const { setNotes } = useNotes();
  const [toggleLableModal, setToggleLableModal] = useState(false);
  const [noteDetails, setNoteDetails] = useState({
    title: "",
    body: "",
    color: "",
    isPinned: false,
    tags: [],
    priority: "Medium",
  });

  return (
    <main className="fixed-container" onClick={(e) => toggleModal(false)}>
      <div className="note-modal" onClick={(e) => e.stopPropagation()}>
        <div className="mg-1 flex-spBt-center">
          <input
            placeholder="Title"
            className="reset-input_xl"
            value={noteDetails.title}
            onChange={(e) =>
              setNoteDetails((details) => ({
                ...details,
                title: e.target.value,
              }))
            }
          />
          <span className="material-icons  rotate-left"> push_pin </span>
        </div>
        <ReactQuill
          theme="snow"
          value={noteDetails.body}
          className="mg-1"
          onChange={(value) =>
            setNoteDetails((details) => ({ ...details, body: value }))
          }
          modules={NoteModal.modules}
          formats={NoteModal.formats}
          placeholder="Write something........"
        />
        <footer className="modal-footer mg-1 relative">
          <select name="priority" className="border-none pointer">
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </select>
          <span className="material-icons pd-rl-1">palette</span>
          <span
            className="material-icons pointer"
            onClick={() => setToggleLableModal((val) => !val)}
          >
            label
          </span>
          {toggleLableModal && <LabelModal />}
          <button
            className="border-reset mg-left-1 pointer"
            onClick={() => addNote(noteDetails, setNotes)}
          >
            Save
          </button>
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
