import { combineReducers, createStore } from "redux";
import loginReducer from "./reducers/loginReducer";
import sessionReducer from "./reducers/sessionReducer";

const store = createStore(
  combineReducers({
    sessionReducer,
    loginReducer,
  })
);

export default store;
