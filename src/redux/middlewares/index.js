import { applyMiddleware } from "redux";
import authMiddleware from "./authMiddleware";
import { routerMiddleware } from "connected-react-router";
import tweetMiddleware from "./tweetMiddleware";
import usersDetailMiddleware from "./usersDetailMiddleware";

export default history =>
  applyMiddleware(
    authMiddleware,
    tweetMiddleware,
    usersDetailMiddleware,
    routerMiddleware(history)
  );
