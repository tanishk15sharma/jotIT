import { createContext, useContext } from "react";

const FiltersContext = createContext(null);

const FiltersProvider = ({ children }) => {
  return <FiltersContext.Provider>{children}</FiltersContext.Provider>;
};
const useFilters = () => useContext(FiltersContext);

export { FiltersProvider, useFilters };
