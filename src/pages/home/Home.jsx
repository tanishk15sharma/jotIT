import React from "react";
import { NotesListing } from "../../components/notes-listing/NotesListing";
import { Search } from "../../components/search/Search";

const Home = () => {
  return (
    <div className="w80">
      <Search />
      <NotesListing />
    </div>
  );
};

export { Home };
