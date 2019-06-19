import * as loginAction from "../reducers/login";
import * as logoutAction from "../reducers/logout";
import * as userAction from "../reducers/user";
import * as tweetAction from "../reducers/tweet";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import { push } from "connected-react-router";

const authMiddleware = store => next => action => {
  next(action);

  const { userCredential } = store.getState().user;

  if (!userCredential) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        store.dispatch(loginAction.loginSuccess());
        store.dispatch(tweetAction.myTweetListener(user));
        store.dispatch(userAction.setUser(user));
      }
    });
  }

  if (action.type === loginAction.USER_LOGIN) {
    const { email, password } = action.payload;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        alert("login success");
        store.dispatch(loginAction.loginSuccess());
        store.dispatch(tweetAction.myTweetListener(user));
        store.dispatch(userAction.setUser(user));
        store.dispatch(push("/anonymatter/home"));
      })
      .catch(() => {
        alert("login failed");
        store.dispatch(loginAction.loginFailed());
        store.dispatch(push("/"));
      });
  }

  if (action.type === loginAction.CHECK_USER_AUTH) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        store.dispatch(loginAction.loginSuccess());
        store.dispatch(userAction.setUser(user));
        store.dispatch(tweetAction.myTweetListener(user));
        store.dispatch(push("/anonymatter/home"));
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
        store.dispatch(push("/anonymatter/login"));
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

  if (action.type === userAction.UPDATE_USER_PROFILE) {
    const { image } = action.payload;
    const storageRef = firebase.storage().ref();
    const imagesRef = storageRef.child(`images/${image.name}`);
    if (image) {
      imagesRef.put(image).then(snapShot => {
        snapShot.ref.getDownloadURL().then(url => {
          firebase
            .auth()
            .currentUser.updateProfile({ photoURL: url })
            .then(() => {
              alert("Profile Updated");
            })
            .catch(err => {
              alert("Error: " + err.message);
            });
        });
      });
    }
  }
};

export default authMiddleware;
