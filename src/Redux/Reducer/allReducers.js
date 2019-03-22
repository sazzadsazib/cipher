import { combineReducers } from "redux";
import { authReducer } from "./authReducer";

const allReducers = combineReducers({
     authReducer: authReducer,
});

export default allReducers;
