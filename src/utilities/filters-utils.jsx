const getSortedNotes = (notes, sortBy) => {
  if (sortBy === "") return notes;
  if (sortBy === "latestDate") {
    return [...notes].sort((a, b) => b.date - a.date);
  } else {
    return [...notes].sort((a, b) => a.date - b.date);
  }
};

const getFilteredNotes = (sortedNotes, priority, label, search) => {
  const searchKey = search.toLowerCase();
  return sortedNotes
    .filter(
      (note) =>
        note.title.toLowerCase().includes(searchKey) ||
        note.body.toLowerCase().includes(searchKey)
    )
    .filter((note) =>
      priority ? note.priority.toLowerCase() === priority.toLowerCase() : true
    )
    .filter((note) => (label ? note.tags.includes(label) : true));
};

export { getSortedNotes, getFilteredNotes };
