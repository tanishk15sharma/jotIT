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
    return data;
  } catch (err) {
    console.log(err.response);
  }
};

export { getAllNotes };
