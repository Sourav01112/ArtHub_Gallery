import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./productReducer/reducer";
import { reducer as adminReducer } from "./adminReducer/reducer";
import { reducer as authReducer } from "./authReducer/reducer";

const middleWare = [thunk];

const rootReducer = combineReducers({
  // reducers here
  productReducer,
  adminReducer,
  authReducer,
});

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(...middleWare)
);
