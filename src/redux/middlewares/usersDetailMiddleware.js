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
        store.dispatch(push("/user-account"));
      })
      .catch(err => alert(err));
  }

  if (action.type === usersDetailAction.SEARCH_USER) {
    const searchedName = action.payload;
    //  const userId = store.getState().user.userCredential.uid;

    new Promise(resolve => {
      db.collection("users")
        .get()
        .then(resolve);
    }).then(snapshot => {
      let isExist = false;
      let uid = null;

      snapshot.forEach(query => {
        isExist = isExist || query.data().userName === searchedName;
        if (query.data().userName === searchedName) {
          uid = query.id;
        }
      });
      if (!isExist) {
        return Promise.reject(`Failed: ${searchedName} User is not exist`);
      }
      return db
        .collection("users")
        .doc(uid)
        .get()
        .then(data => {
          const searchedUser = data.data();
          store.dispatch(usersDetailAction.searchUserSucceed(searchedUser));
        })
        .catch(err => {
          alert("Error: " + err.message);
        });
    });
  }
};
export default usersDetailMiddleware;
