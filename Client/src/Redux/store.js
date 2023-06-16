import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./productReducer/reducer";

const middleWare = [thunk];

const rootReducer = combineReducers({
  // reducers here
  productReducer,
});

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(...middleWare)
);
