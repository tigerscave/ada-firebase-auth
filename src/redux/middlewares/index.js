import { applyMiddleware } from "redux";
import authMiddleware from "./authMiddleware";
import { routerMiddleware } from "connected-react-router";
import tweetMiddleware from "./tweetMiddleware";

export default history =>
  applyMiddleware(authMiddleware, tweetMiddleware, routerMiddleware(history));
