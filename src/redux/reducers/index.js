import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import login from "./login";
import user from "./user";
import postTweet from "./tweet";

export default history =>
  combineReducers({
    router: connectRouter(history),
    login,
    user,
    postTweet
  });
