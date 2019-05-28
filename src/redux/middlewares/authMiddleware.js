import * as loginAction from "../reducers/login";
import * as logoutAction from "../reducers/logout";
import * as userAction from "../reducers/user";

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
      .then(user => {
        alert("login success");
        store.dispatch(loginAction.loginSuccess());
        store.dispatch(userAction.setUser(user));
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
        store.dispatch(userAction.setUser(user));
        store.dispatch(push("/top"));
      } else {
        store.dispatch(loginAction.loginFailed());
      }
    });
  }

  if (action.type === logoutAction.USER_LOGOUT) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("logout success!");
        store.dispatch(logoutAction.logoutSuccess());
        store.dispatch(userAction.clearUser());
        store.dispatch(push("/welcome"));
      })
      .catch(() => {
        store.dispatch(logoutAction.logoutFailed());
        alert("Failed to logout !");
      });
  }

  if (action.type === userAction.CREATE_USER) {
    const { email, password } = action.payload;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        alert("User sign up successfully");
        store.dispatch(userAction.createUserSuccess());
        store.dispatch(userAction.setUser(user));
        store.dispatch(push("/top"));
      })
      .catch(() => {
        store.dispatch(userAction.createUserFailed());
        alert("User Sign Up Failed");
      });
  }

  if (action.type === userAction.DELETE_USER) {
    firebase
      .auth()
      .currentUser.delete()
      .then(() => {
        alert("Your account deleted");
        store.dispatch(push("/welcome"));
      })
      .catch(err => {
        alert("Error: " + err.message);
      });
  }

  if (action.type === userAction.EDIT_PROFILE) {
    const { displayName, photoURL } = action.payload;
    firebase
      .auth()
      .currentUser.updateProfile({
        displayName,
        photoURL
      })
      .then(() => {
        alert("Profile Update");
        store.dispatch(push("/top"));
      })
      .catch(err => {
        alert("Error: " + err.message);
      });
  }
};

export default authMiddleware;
