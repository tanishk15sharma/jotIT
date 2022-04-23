const getSortedNotes = (notes, sortBy, priority, label) => {
  if (sortBy === "") return notes;
  if (sortBy === "latestDate") {
    return [...notes].sort((a, b) => b.date - a.date);
  } else {
    return [...notes].sort((a, b) => a.date - b.date);
  }
};

export { getSortedNotes };
