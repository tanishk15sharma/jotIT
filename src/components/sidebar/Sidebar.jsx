import React, { useState } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { NoteModal } from "../note-modal/NoteModal";
const Sidebar = () => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <Link to="/">
          <li>
            <span className="material-icons side-icon"> home </span>
            HOME
          </li>
        </Link>
        <Link to="/label">
          <li>
            <span className="material-icons side-icon">label </span>
            LABELS
          </li>
        </Link>
        <Link to="/archive">
          <li>
            <span className="material-icons side-icon"> archive </span>
            ARCHIVE
          </li>
        </Link>
        <Link to="trash">
          <li>
            <span className="material-icons side-icon"> delete </span>
            TRASH
          </li>
        </Link>

        <Link to="/">
          <li>
            <span className="material-icons side-icon"> account_circle </span>
            PROFILE
          </li>
        </Link>

        <button
          className="create-btn"
          onClick={() => setToggleModal((val) => !val)}
        >
          CREATE NEW NOTE
        </button>
        {toggleModal ? <NoteModal toggleModal={setToggleModal} /> : null}
      </ul>
    </aside>
  );
};

export { Sidebar };
