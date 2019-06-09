import * as usersDetailAction from "../reducers/usersDetail";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const usersDetailMiddleware = store => next => action => {
  console.log("middle ware: ");
};

export default usersDetailMiddleware;
