import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk";
import { reducer as productReducer } from "./productReducer/reducer";
import { reducer as adminReducer } from "./adminReducer/reducer";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as cartReducer } from "./cartReducer/reducer";


// const middleWare = [thunk];

const rootReducer = combineReducers({
  // reducers here
  productReducer,
  adminReducer,
  authReducer,
  cartReducer
});


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// export const store = legacy_createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );


export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk)
);
