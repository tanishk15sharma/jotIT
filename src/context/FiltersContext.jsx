import { createContext, useContext, useReducer } from "react";

const FiltersContext = createContext(null);

const filtersReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY":
      return { ...state, sortBy: action.payload };
    case "PRIORITY":
      return { ...state, priority: action.payload };
    case "LABEL":
      return { ...state, label: action.payload };
    default:
      return state;
  }
};

const FiltersProvider = ({ children }) => {
  const [filtersState, filtersDispatch] = useReducer(filtersReducer, {
    sortBy: "",
    priority: "",
    label: "",
  });

  return (
    <FiltersContext.Provider value={{ filtersState, filtersDispatch }}>
      {children}
    </FiltersContext.Provider>
  );
};
const useFilters = () => useContext(FiltersContext);

export { FiltersProvider, useFilters };
