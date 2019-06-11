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

    const takeUserName = names => query => {
      const user = query.data();
      names.push(user.userName);
    };

    new Promise((resolve, reject) => {
      db.collection("users").onSnapshot(resolve);
    })
      .then(snapshot => {
        let names = [];
        snapshot.forEach(takeUserName(names));
        return names;
      })
      .then(names => {
        names.every(name => {
          if (name !== userName) {
            db.collection("users")
              .doc(userId)
              .set({
                userName,
                familyName,
                birthDay: birthDayTimeStamp,
                biography
              })
              .then(() => {
                alert("Edit User Detail succeed");
                store.dispatch(push("/my-account"));
              })
              .catch(err => {
                alert("Error: " + err.message);
              });
          } else {
            alert(
              "Failed: this use name already exist, please use another user name"
            );
          }
        });
      });
  }

  if (action.type === usersDetailAction.SEARCH_USER) {
    console.log("Search action ... ", action.payload);
  }
};

export default usersDetailMiddleware;
