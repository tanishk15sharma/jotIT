import React from "react";
import { TrashCard } from "../../components/trash/TrashCard";
import { useTrash } from "../../context/TrashContext";

const Trash = () => {
  const { trash, setTrash } = useTrash();

  return (
    <div className="w100">
      {trash.map((note) => (
        <TrashCard note={note} setTrash={setTrash} />
      ))}
    </div>
  );
};

export { Trash };
