import axios from "axios";
import toast from "react-hot-toast";

const getAllNotes = async (token) => {
  try {
    const { data, status } = await axios.get("/api/notes", {
      headers: {
        authorization: token,
      },
    });

    if (status !== 200) return;
    return data.notes;
  } catch (err) {
    console.log(err.response);
  }
};

const addNote = async (note, setNotes, token) => {
  console.log(note, token);
  const toastId = toast.loading("Adding...");
  try {
    const { data, status } = await axios.post(
      "/api/notes",
      { note },
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (status !== 201) return;
    toast.success("Note added successfully !", {
      id: toastId,
    });
    setNotes(data.notes);
  } catch (err) {
    console.log(err.response);
    toast.error("try again", {
      id: toastId,
    });
  }
};

const editNote = async (id, note, setNotes, token) => {
  const toastId = toast.loading("Updating...");
  try {
    const { data, status } = await axios.post(
      `/api/notes/${id}`,
      { note },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status !== 201) return;
    toast.success("Note updated successfully !", {
      id: toastId,
    });
    setNotes(data.notes);
  } catch (err) {
    console.log(err.response);
    toast.error("try again", {
      id: toastId,
    });
  }
};

const deleteNote = async (id, setNotes, token) => {
  try {
    const { data, status } = await axios.delete(`/api/notes/${id}`, {
      headers: {
        authorization: token,
      },
    });

    if (status === 200) {
      toast.success("Note Trashed!");
      setNotes(data.notes);
    }
  } catch (err) {
    console.log(err);
    toast.error("try again");
  }
};

export { getAllNotes, addNote, deleteNote, editNote };
