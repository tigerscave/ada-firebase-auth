import { applyMiddleware } from "redux";
import authMiddleware from "./authMiddleware";
import { routerMiddleware } from "connected-react-router";

export default history =>
  applyMiddleware(authMiddleware, routerMiddleware(history));
