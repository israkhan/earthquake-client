import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import user from "./user";
import auth from "./auth";
import earthquakes from "./earthquakes";
import subscription from "./subscription";
import reports from "./reports";

const reducer = combineReducers({
  user,
  auth,
  earthquakes,
  subscription,
  reports,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export * from "./user";
export * from "./auth";
export * from "./earthquakes";
export * from "./subscription";
export * from "./reports";
export default store;
