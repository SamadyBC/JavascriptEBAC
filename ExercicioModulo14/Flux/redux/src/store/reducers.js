const initialState = {
  notes: [
    {
      id: "0001",
      title: "Exemplo de nota 1",
      detail: "Exemplo de descricao de nota 1",
    },
    {
      id: "0002",
      title: "Exemplo de nota 2",
      detail: "Exemplo de descricao de nota 2",
    },
  ],
  name: "Samady",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.note],
      };
    case "REMOVE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note !== action.note),
      };
    case "GET_NOTE":
      return {
        ...state,
      };
    default:
      return state;
  }
};
