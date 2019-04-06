let defaultState = {};

export const authReducer = (state = defaultState, action) => {
     switch (action.type) {
          case "GET_AUTH_TOKEN_SUCCESS":
               return Object.assign({}, state, {
                    auth: action.payload,
               });

          case "GET_AUTH_TOKEN_FAIL":
               return Object.assign({}, state, {
                    auth: action.payload,
               });

          case "GET_LOGOUT_SUCCESS":
               return Object.assign({}, state, {
                    auth: "",
               });

          case "GET_LOGOUT_FAILED":
               return Object.assign({}, state, {
                    auth: "",
               });

          default:
               return state;
     }
};
