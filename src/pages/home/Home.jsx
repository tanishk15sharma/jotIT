import React from "react";
import { NotesListing } from "../../components/notes-listing/NotesListing";
import { Search } from "../../components/search/Search";
import { useAuth } from "../../context/AuthContext";
import "./Home.scss";
const Home = () => {
  const { auth } = useAuth();
  return (
    <div className="notes-container">
      <Search />
      <NotesListing />
    </div>
  );
};

export { Home };
