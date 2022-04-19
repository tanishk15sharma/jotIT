import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Archive, Home, Label, Trash } from "./pages";
import { Nav } from "./components/nav/Nav";
import { Sidebar } from "./components/sidebar/Sidebar";
import Auth from "./components/auth/Auth";
function App() {
  return (
    <div>
      <Nav />
      <div className="flex-spBt main mg-p5">
        <Sidebar />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="/label" element={<Label />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/trash" element={<Trash />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
