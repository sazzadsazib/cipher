import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createEncryptor from "redux-persist-transform-encrypt";
import allReducers from "./Redux/Reducer/allReducers";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const createHistory = require("history").createBrowserHistory;
const history = createHistory();
const encryptor = createEncryptor({
     secretKey: "my-super-secret-key",
     onError: function(error) {
          // Handle the error.
     },
});
const persistConfig = {
     key: "cipher",
     transforms: [encryptor],
     storage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
let persistor = persistStore(store);

require("dotenv").config();

ReactDOM.render(
     <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
               <Router history={history}>
                    <App />
               </Router>
          </PersistGate>
     </Provider>,
     document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
