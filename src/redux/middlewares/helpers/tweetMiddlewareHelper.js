export const sendTweetToDB = async (data, store, db) => {
  const queryData = {
    ...data,
    likedUsers: []
  };
  const doc = db.collection("tweets").doc();
  await doc.set(queryData);
  const tweetId = doc.id;

  //Here, add tweets data to users follower feed

  const myId = store.getState().user.userCredential.uid;
  const userDoc = db.collection("users").doc(myId);
  const userSnapshot = await userDoc.get();
  const followerWithMyId = [...userSnapshot.data().follower, myId];

  followerWithMyId.map(async uid => {
    await db
      .collection(`users/${uid}/feed`)
      .doc(tweetId)
      .set(queryData);
  });
};
