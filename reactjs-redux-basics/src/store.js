import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import mathsReducer from "./reducers/mathsReducer";
import userReducer from "./reducers/userReducer";

// Example of custom middleware
// const myLogger = (store) => (next) => (action) => { // Pattern of functions expected by redux
//     console.log("Logged action:", action);
//     next(action); // Execute action
// }

// First arg: reducers, second arg: initial state (will be overwritten), third arg: middleware
export default createStore(
    combineReducers({mathsReducer, userReducer}), 
    {}, 
    applyMiddleware(logger, thunk, promise)
);