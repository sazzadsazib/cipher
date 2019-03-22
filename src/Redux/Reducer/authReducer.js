let defaultState = {};

export const authReducer = (state = defaultState, action) => {
     switch (action.type) {
          case "GET_AUTH_TOKEN_SUCCESS":
               return Object.assign({}, state, {
                    auth: action.payload,
                    token: action.payload.token,
               });

          case "GET_AUTH_TOKEN_FROM_SESSION_SUCCESS":
               return Object.assign({}, state, {
                    auth: action.payload,
                    token: action.payload.token,
               });

          case "GET_LOGOUT_SUCCESS":
               return Object.assign({}, state, {
                    auth: "",
                    token: "",
                    shopId: "",
               });

          case "GET_LOGOUT_FAILED":
               return Object.assign({}, state, {
                    // auth: action.payload,
               });
          case "SET_SHOP_ID":
               return Object.assign({}, state, {
                    shopId: action.payload,
               });
          default:
               return state;
     }
};
