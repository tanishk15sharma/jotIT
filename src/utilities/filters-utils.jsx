const getFilteredNotes = (notes, sortBy, priority, label) => {
  let getSortedNotes = [];

  if (sortBy === "latestDate") {
    getSortedNotes = [...notes].sort((a, b) => b.date - a.date);
  } else {
    getSortedNotes = [...notes].sort((a, b) => a.date - b.date);
  }
  return getSortedNotes;
};

export { getFilteredNotes };
