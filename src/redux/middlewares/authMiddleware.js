import * as loginAction from "../reducers/login";
import firebase from "firebase/app";
import "firebase/auth";
import { push } from "connected-react-router";

const authMiddleware = store => next => action => {
  next(action);
  if (action.type === loginAction.USER_LOGIN) {
    const { email, password } = action.payload;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("login success");
        store.dispatch(loginAction.loginSuccess());
        store.dispatch(push("/top"));
      })
      .catch(() => {
        alert("login failed");
        store.dispatch(loginAction.loginFailed());
        store.dispatch(push("/welcome"));
      });
  }

  if (action.type === loginAction.CHECK_USER_AUTH) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        store.dispatch(loginAction.loginSuccess());
        store.dispatch(push("/top"));
      } else {
        store.dispatch(loginAction.loginFailed());
      }
    });
  }
};

export default authMiddleware;
