const deleteTrashNote = (id, setTrash) => {
  setTrash((trash) => trash.filter((note) => note._id !== id));
};

export { deleteTrashNote };
