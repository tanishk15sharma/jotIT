import { createContext, useState, useContext, useEffect } from "react";

const TrashContext = createContext(null);

const TrashProvider = ({ children }) => {
  const [trash, setTrash] = useState([]);
  return (
    <TrashContext.Provider value={{ trash, setTrash }}>
      {children}
    </TrashContext.Provider>
  );
};
const useTrash = () => useContext(TrashContext);
export { TrashProvider, useTrash };
