const initialState = {
    notes: [
        {
            id: '010101',
            title: 'Exemplo Nota 1',
            details: 'Exemplo de descrição de nota 1',
        },
        {
            id: '020202',
            title: 'Exemplo Nota 2',
            details: 'Exemplo de descrição de nota 2'
        },
    ],
    name: 'Marcelo'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
          return {
            ...state,
            notes: [...state.notes, action.note],
          }
        
        case 'REMOVE_NOTE':
          return {
            ...state,
            notes: state.notes.filter(note => note !== action.note),
          }
  
        case 'GET_NOTES':
            return {
              ...state,
            }    
  
        default:
            return state;
    }
  }