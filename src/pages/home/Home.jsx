import React from "react";
import { NotesListing } from "../../components/notes-listing/NotesListing";
import { Search } from "../../components/search/Search";
import "./Home.scss";
const Home = () => {
  return (
    <div className="notes-container">
      <Search />
      <NotesListing />
    </div>
  );
};

export { Home };
