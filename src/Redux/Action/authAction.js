import Axios from "axios";
const env = require("../../env")();

export function userLogin(body) {
     return function(dispatch) {
          return Axios.post(env.userAuth, body)
               .then(function(response) {
                    dispatch({ type: "GET_AUTH_TOKEN_SUCCESS", payload: response.data });
                    return response.data.success;
               })
               .catch(function(error) {
                    dispatch({ type: "GET_AUTH_TOKEN_FAIL", payload: error.response });
                    return false;
               });
     };
}
