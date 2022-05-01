import axios from "axios";

import toast from "react-hot-toast";
const getAllArchives = async (token) => {
  try {
    const { data, status } = await axios.get("/api/archives", {
      headers: {
        authorization: token,
      },
    });
    if (status !== 200) return;
    return data.archives;
  } catch (err) {
    console.log(err.response);
  }
};

const addToArchives = async (id, note, setNotes, setArchives, token) => {
  toast.success("Note Archived !");
  try {
    const { data, status } = await axios.post(
      `/api/notes/archives/${id}`,
      { note },
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (status !== 201) return;
    setNotes(data.notes);
    setArchives(data.archives);
  } catch (err) {
    console.log(err);
    toast.error("Archive Failed !");
  }
};

const restoreNote = async (id, setNotes, setArchives, token) => {
  toast.success("Note Unarchived !");

  try {
    const { data, status } = await axios.post(
      `/api/archives/restore/${id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status !== 200) return;
    setNotes(data.notes);
    setArchives(data.archives);
  } catch (err) {
    console.log(err.response);
    toast.error("Failed !");
  }
};

const deleteFromArchive = async (id, setArchives, token) => {
  toast.success("Note Delete successfully !");
  try {
    const { data, status } = await axios.delete(`/api/archives/delete/${id}`, {
      headers: {
        authorization: token,
      },
    });
    if (status !== 200) return;
    setArchives(data.archives);
  } catch (err) {
    console.log(err);
    toast.error("Try again !");
  }
};

export { getAllArchives, addToArchives, restoreNote, deleteFromArchive };
