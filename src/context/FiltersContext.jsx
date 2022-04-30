import { createContext, useContext, useReducer } from "react";

const FiltersContext = createContext(null);

const filtersReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_NOTE":
      return { ...state, search: action.payload };
    case "SORT_BY":
      return { ...state, sortBy: action.payload };
    case "PRIORITY":
      return { ...state, priority: action.payload };
    case "LABEL":
      return { ...state, label: action.payload };
    case "CLEAR_ALL":
      return {
        sortBy: "",
        priority: "",
        label: "",
        search: "",
      };
    default:
      return state;
  }
};

const FiltersProvider = ({ children }) => {
  const [filtersState, filtersDispatch] = useReducer(filtersReducer, {
    sortBy: "",
    priority: "",
    label: "",
    search: "",
  });

  return (
    <FiltersContext.Provider value={{ filtersState, filtersDispatch }}>
      {children}
    </FiltersContext.Provider>
  );
};
const useFilters = () => useContext(FiltersContext);

export { FiltersProvider, useFilters };
