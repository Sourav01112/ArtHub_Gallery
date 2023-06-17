import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./productReducer/reducer";
import { reducer as adminReducer } from "./adminReducer/reducer";

const middleWare = [thunk];

const rootReducer = combineReducers({
  // reducers here
  productReducer,
  adminReducer,
});

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(...middleWare)
);
