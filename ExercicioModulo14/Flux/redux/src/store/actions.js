//ES6 syntax

export const getNotes = () => {
  return {
    type: "GET_NOTES",
  };
};

export const addNote = (note) => {
  return {
    type: "ADD_NOTE",
    note,
  };
};

export const removeNote = (note) => {
  return {
    type: "REMOVE_NOTE",
    note,
  };
};
