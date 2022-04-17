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
export { getAllArchives };
