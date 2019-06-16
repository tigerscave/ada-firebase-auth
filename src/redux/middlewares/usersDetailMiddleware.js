import * as usersDetailAction from "../reducers/usersDetail";
import { push } from "connected-react-router";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
const usersDetailMiddleware = store => next => action => {
  next(action);
  const db = firebase.firestore();

  if (action.type === usersDetailAction.EDIT_USER_DETAIL) {
    const userId = store.getState().user.userCredential.uid;
    const { userName, familyName, birthDay, biography } = action.payload;
    const birthDayTimeStamp = firebase.firestore.Timestamp.fromDate(
      new Date(birthDay)
    );

    new Promise(resolve => {
      db.collection("users").onSnapshot(resolve);
    })
      .then(snapshot => {
        let isExist = false;
        snapshot.forEach(query => {
          isExist = isExist || query.data().userName === userName;
        });
        if (isExist) {
          return Promise.reject(
            "Failed: this use name already exist, please use another user name"
          );
        }
        return db
          .collection("users")
          .doc(userId)
          .set({
            userName,
            familyName,
            birthDay: birthDay ? birthDayTimeStamp : null,
            biography
          });
      })
      .then(() => {
        alert("Edit User Detail succeed");
        store.dispatch(push("/my-account"));
      })
      .catch(err => alert(err));
  }

  if (action.type === usersDetailAction.SEARCH_USER) {
    db.collection("users").get();
  }
};

export default usersDetailMiddleware;
