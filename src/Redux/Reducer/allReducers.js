import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { notesReducer } from "./notesReducer";

const allReducers = combineReducers({
     authReducer: authReducer,
     noteReducer: notesReducer,
});

export default allReducers;
