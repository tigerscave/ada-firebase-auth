import { applyMiddleware } from "redux";
import authMiddleware from "./authMiddleware";

export default applyMiddleware(authMiddleware);
