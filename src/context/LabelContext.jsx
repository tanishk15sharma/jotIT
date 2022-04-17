import { createContext, useContext, useState } from "react";

const LabelContext = createContext(null);

const LabelProvider = ({ children }) => {
  const [labels, setLabels] = useState([]);
  return (
    <LabelContext.Provider value={{ labels, setLabels }}>
      {children}
    </LabelContext.Provider>
  );
};

const useLabels = () => useContext(LabelContext);

export { LabelProvider, useLabels };
