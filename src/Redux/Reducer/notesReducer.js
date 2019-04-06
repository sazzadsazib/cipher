let defaultState = {};

export const notesReducer = (state = defaultState, action) => {
     switch (action.type) {
          case "GET_NOTE_SUCCESS":
               return Object.assign({}, state, {
                    notes: action.payload.notes,
                    success: action.payload.success,
               });

          case "GET_NOTE_FAILED":
               return Object.assign({}, state, {
                    notes: [],
               });

          case "CLEAR_NOTE_SUCCESS":
               return Object.assign({}, state, {
                    notes: [],
               });

          default:
               return state;
     }
};
