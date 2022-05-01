import { createContext, useContext, useState, useEffect } from "react";
import { getAllArchives } from "../utilities/archives-utils";
import { useAuth } from "./AuthContext";

const ArchiveContext = createContext(null);

const ArchiveProvider = ({ children }) => {
  const [archives, setArchives] = useState([]);
  const { auth } = useAuth();
  useEffect(() => {
    (async () => {
      if (!auth.isLoggedIn) return;
      const setAllArchives = await getAllArchives();
      setArchives(setAllArchives);
    })();
  }, [auth.isLoggedIn]);
  return (
    <ArchiveContext.Provider value={{ archives, setArchives }}>
      {children}
    </ArchiveContext.Provider>
  );
};

const useArchive = () => useContext(ArchiveContext);

export { ArchiveProvider, useArchive };
