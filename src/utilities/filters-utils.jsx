const getSortedNotes = (notes, sortBy) => {
  if (sortBy === "") return notes;
  if (sortBy === "latestDate") {
    return [...notes].sort((a, b) => b.date - a.date);
  } else {
    return [...notes].sort((a, b) => a.date - b.date);
  }
};

const getFilteredNotes = (sortedNotes, priority, label) => {
  return sortedNotes
    .filter((note) =>
      priority ? note.priority.toLowerCase() === priority.toLowerCase() : true
    )
    .filter((note) => (label ? note.tags.includes(label) : true));
};

export { getSortedNotes, getFilteredNotes };
