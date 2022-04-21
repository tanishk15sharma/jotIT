import axios from "axios";
import { getToken } from "./helper-utils";
import toast from "react-hot-toast";
const getAllArchives = async () => {
  try {
    const { data, status } = await axios.get("/api/archives", {
      headers: {
        authorization: getToken(),
      },
    });
    if (status !== 200) return;
    return data.archives;
  } catch (err) {
    console.log(err.response);
  }
};

const addToArchives = async (id, note, setNotes, setArchives) => {
  toast.success("Note Archived !");
  try {
    const { data, status } = await axios.post(
      `/api/notes/archives/${id}`,
      { note },
      {
        headers: {
          authorization: getToken(),
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

const restoreNote = async (id, setNotes, setArchives) => {
  toast.success("Note Unarchived !");

  try {
    const { data, status } = await axios.post(
      `/api/archives/restore/${id}`,
      {},
      {
        headers: {
          authorization: getToken(),
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

const deleteFromArchive = async (id, setArchives) => {
  toast.success("Note Delete successfully !");
  try {
    const { data, status } = await axios.delete(`/api/archives/delete/${id}`, {
      headers: {
        authorization: getToken(),
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
