import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Archive, Home, Label, Trash } from "./pages";
import { Nav } from "./components/nav/Nav";
function App() {
  return (
    <div className="mg-tb-2 mg-rl-5">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/label" element={<Label />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </div>
  );
}

export default App;
