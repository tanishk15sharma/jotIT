import axios from "axios";
import { getToken } from "./helper-utils";

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
  }
};

const restoreNote = async (id, setNotes, setArchives) => {
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
  }
};

const deleteFromArchive = async (id, setArchives) => {
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
  }
};

export { getAllArchives, addToArchives, restoreNote, deleteFromArchive };
