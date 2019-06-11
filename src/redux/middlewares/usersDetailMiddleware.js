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

    let allUserName = [];
    
    db.collection("users").onSnapshot(querySnapshot => {
      querySnapshot.forEach(query => {
        const user = query.data();
        if (user.userName) {
          allUserName.push(user.userName);
        }
      });
  
      allUserName.every(name => {
        if (name !== userName && userName) {
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
    console.log('hoge', userName, allUserName)
    
  }
};

export default usersDetailMiddleware;
