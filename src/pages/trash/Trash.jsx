import React from "react";
import { TrashCard } from "../../components/trash/TrashCard";
import { useTrash } from "../../context/TrashContext";
import deleteImgBg from "../../assets/deletebg-img.svg";
import toast from "react-hot-toast";
const Trash = () => {
  const { trash, setTrash } = useTrash();

  return (
    <div className="w100">
      <h3
        className="pointer "
        onClick={() => {
          toast.loading("Deleting all...");
          setTrash([]);
        }}
      >
        CLEAR ALL
      </h3>
      {trash.length === 0 ? (
        <div className="dim-6">
          <img src={deleteImgBg} className="bg-img" alt="trash bg image" />
          <h2 className="txt-center">No Jot's in Recycle Bin!</h2>
        </div>
      ) : (
        <div>
          {trash.map((note) => (
            <TrashCard note={note} key={note._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export { Trash };
