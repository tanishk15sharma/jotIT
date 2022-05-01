import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Archive, Home, Label, Trash, PageNoteFound } from "./pages";
import { Nav } from "./components/nav/Nav";
import { Sidebar } from "./components/sidebar/Sidebar";
import Auth from "./components/auth/Auth";

import { MobileNav } from "./components/mobile-nav/MobileNav";
import { Toast } from "./components/toast/Toast";
import { useAuth } from "./context/AuthContext";
function App() {
  const { auth } = useAuth();
  return (
    <div>
      <Toast />
      <Nav />
      <MobileNav />
      <div className="flex-spBt main mg-p5">
        <Sidebar />
        <Routes>
          <Route path="/" element={auth.isLoggedIn ? <Home /> : <Auth />} />
          <Route path="/label" element={<Label />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="*" element={<PageNoteFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
