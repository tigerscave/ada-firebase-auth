import * as usersDetailAction from "../reducers/usersDetail";

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
      })
      .catch(err => {
        alert("Error: " + err.message);
      });
  }
};

export default usersDetailMiddleware;
