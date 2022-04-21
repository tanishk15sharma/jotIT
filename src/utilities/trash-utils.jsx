import toast from "react-hot-toast";

const deleteTrashNote = (id, setTrash) => {
  setTrash((trash) => trash.filter((note) => note._id !== id));
  toast.success("Deleted Permanentaly !");
};

export { deleteTrashNote };
