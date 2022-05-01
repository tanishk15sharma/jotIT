import { createContext, useState, useContext, useEffect } from "react";
import { getAllNotes } from "../utilities/allNotes-utils";
// import "./context/AuthContext.jsx";
import { useAuth } from "./AuthContext";
const NotesContext = createContext(null);

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    if (!auth.isLoggedIn) return;
    (async () => {
      const allNotes = await getAllNotes(auth.encodedToken);
      setNotes(allNotes);
    })();
  }, [auth.isLoggedIn]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};
const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
