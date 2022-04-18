import React, { useRef, useEffect } from "react";
import { ArchiveCard } from "../../components/archive/ArchiveCard";
import { useArchive } from "../../context/ArchiveContext";

const Archive = () => {
  const { archives, setArchives } = useArchive();

  return (
    <div className="w100">
      {archives.map((note) => (
        <ArchiveCard note={note} key={note._id} />
      ))}
    </div>
  );
};

export { Archive };
