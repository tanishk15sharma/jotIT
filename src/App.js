import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Archive, Home, Label, Trash } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/label" element={<Label />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/trash" element={<Trash />} />
    </Routes>
  );
}

export default App;
