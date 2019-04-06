import Axios from "axios";
const env = require("../../env")();

export function getNotes(body) {
     return function(dispatch) {
          return Axios.get(env.getUserNote, { params: { username: body.username, storedPassword: body.storedPassword } })
               .then(function(response) {
                    dispatch({ type: "GET_NOTE_SUCCESS", payload: response.data });
                    return response.data.success;
               })
               .catch(function(error) {
                    dispatch({ type: "GET_NOTE_FAILED", payload: error.response });
                    return false;
               });
     };
}
