import { createContext, useState, useContext } from "react";

const NotesContext = createContext(null);

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};
const useNotes = useContext(NotesContext);

export { NotesProvider, useNotes };
