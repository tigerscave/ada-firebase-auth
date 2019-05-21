import * as loginAction from "../modules/login";
import firebase from "firebase/app";
import "firebase/auth";

const authMiddleare = store => next => action => {
  next(action);
  if (action.type === loginAction.USER_LOGIN) {
    const { email, password } = action.payload;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("login success");
        store.dispatch(loginAction.loginSuccess());
      })
      .catch(() => {
        alert("login failed");
        store.dispatch(loginAction.loginFailed());
      });
  }
};

export default authMiddleare;
