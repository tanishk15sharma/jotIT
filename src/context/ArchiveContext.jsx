import { createContext, useContext, useState, useEffect } from "react";
import { getAllArchives } from "../utilities/archives-utils";

const ArchiveContext = createContext(null);

const ArchiveProvider = ({ children }) => {
  const [archives, setArchives] = useState([]);

  useEffect(() => {
    (async () => {
      const setAllArchives = await getAllArchives();
      setArchives(setAllArchives);
    })();
  }, []);
  return (
    <ArchiveContext.Provider value={{ archives, setArchives }}>
      {children}
    </ArchiveContext.Provider>
  );
};

const useArchive = () => useContext(ArchiveContext);

export { ArchiveProvider, useArchive };
