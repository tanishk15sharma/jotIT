import React from "react";
import { TrashCard } from "../../components/trash/TrashCard";
import { useTrash } from "../../context/TrashContext";

const Trash = () => {
  const { trash, setTrash } = useTrash();

  return (
    <div className="w100">
      <h3 className="pointer" onClick={() => setTrash([])}>
        Clear All
      </h3>
      {trash.map((note) => (
        <TrashCard note={note} key={note._id} />
      ))}
    </div>
  );
};

export { Trash };
