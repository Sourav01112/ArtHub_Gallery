import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  // reducers here
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
