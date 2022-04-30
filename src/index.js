import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { NotesProvider } from "./context/NotesContext";
import { TrashProvider } from "./context/TrashContext";
import { LabelProvider } from "./context/LabelContext";
import { ArchiveProvider } from "./context/ArchiveContext";
import { FiltersProvider } from "./context/FiltersContext";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NotesProvider>
          <TrashProvider>
            <LabelProvider>
              <ArchiveProvider>
                <FiltersProvider>
                  <App />
                </FiltersProvider>
              </ArchiveProvider>
            </LabelProvider>
          </TrashProvider>
        </NotesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
