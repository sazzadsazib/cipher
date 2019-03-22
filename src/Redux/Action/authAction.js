import Axios from "axios";
const env = require("../env")();

export function userLogin(body) {
     return function(dispatch) {
          return Axios.post("raondomurl", body)
               .then(function(response) {
                    dispatch({ type: "GET_AUTH_TOKEN_SUCCESS", payload: response.data });
                    return true;
               })
               .catch(function(error) {
                    dispatch({ type: "GET_AUTH_TOKEN_FAIL", payload: error.response });
                    return false;
               });
     };
}
