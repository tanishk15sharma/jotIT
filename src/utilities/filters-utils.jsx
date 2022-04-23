const getSortedNotes = (notes, sortBy) => {
  if (sortBy === "") return notes;
  if (sortBy === "latestDate") {
    return [...notes].sort((a, b) => b.date - a.date);
  } else {
    return [...notes].sort((a, b) => a.date - b.date);
  }
};

const getFilteredNotes = (sortedNotes, priority, label) => {
  if (priority === "All") return sortedNotes;
  return sortedNotes.filter(
    (note) => note.priority.toLowerCase() === priority.toLowerCase()
  );
};

export { getSortedNotes, getFilteredNotes };
