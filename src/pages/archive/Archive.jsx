import React from "react";
import { ArchiveCard } from "../../components/archive/ArchiveCard";
import { useArchive } from "../../context/ArchiveContext";
import archiveImgBg from "../../assets/archivebg-img.svg";
const Archive = () => {
  const { archives } = useArchive();

  return (
    <div className="w100">
      {archives.length === 0 ? (
        <div className="dim-6">
          <img src={archiveImgBg} className="bg-img" alt="archive bg image" />
          <h2 className="txt-center">Your Archived Jot's!</h2>
        </div>
      ) : (
        <>
          {archives.map((note) => (
            <ArchiveCard note={note} key={note._id} />
          ))}
        </>
      )}
    </div>
  );
};

export { Archive };
