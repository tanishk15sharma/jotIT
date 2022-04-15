import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./NoteModal.scss";
const NoteModal = ({ toggleModal }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="fixed-container" onClick={(e) => toggleModal(false)}>
      <div className="note-modal" onClick={(e) => e.stopPropagation()}>
        <div className="mg-1 flex-spBt-center">
          <input
            placeholder="title"
            className="reset-input"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <i class="fa-solid fa-thumbtack"></i>
        </div>
        <ReactQuill
          theme="snow"
          value={value}
          className="mg-1"
          onChange={setValue}
          modules={{
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
          }}
          formats={[
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
          ]}
        />

        <div className="note-body mg-1">
          <div>color</div>
          <div>Label</div>
        </div>
      </div>
    </div>
  );
};

export { NoteModal };
