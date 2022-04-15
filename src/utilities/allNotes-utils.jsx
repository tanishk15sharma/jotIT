import axios from "axios";

import { getToken } from "./helper-utils";

const getAllNotes = async () => {
  try {
    const { data, status } = await axios.get("/api/notes", {
      headers: {
        authorization: getToken(),
      },
    });
    if (status !== 200) return;

    return data.notes;
  } catch (err) {
    console.log(err.response);
  }
};

const addNote = async (note, setNotes) => {
  try {
    const { data, status } = await axios.post(
      "/api/notes",
      { note },
      {
        headers: {
          authorization: getToken(),
        },
      }
    );
    if (status !== 201) return;

    setNotes(data.notes);
  } catch (err) {
    console.log(err.response);
  }
};

export { getAllNotes, addNote };
