import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import login from "./login";

export default history =>
  combineReducers({
    router: connectRouter(history),
    login
  });
