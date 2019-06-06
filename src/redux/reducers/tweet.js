import { createAction } from "redux-actions";

export const CREATE_TWEET = "CREATE_TWEET";
export const createTweet = createAction(CREATE_TWEET);

export const DISPLAY_LATEST_TWEET = "DISPLAY_LATEST_TWEET";
export const displayLatestTweets = createAction(DISPLAY_LATEST_TWEET);

export const MY_TWEET_LISTENER = "MY_TWEET_LISTENER";
export const myTweetListener = createAction(MY_TWEET_LISTENER);

export const ON_SNAPSHOT_MY_TWEET = "ON_SNAPSHOT_MY_TWEET";
export const onSnapshotMyTweet = createAction(ON_SNAPSHOT_MY_TWEET);

const INITIAL_STATE = {
  isLoading: false,
  latestTweet: null,
  myTweets: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_TWEET: {
      return {
        ...state,
        isLoading: true
      };
    }

    case DISPLAY_LATEST_TWEET: {
      const docs = action.payload;
      return {
        ...state,
        latestTweet: docs
      };
    }

    case MY_TWEET_LISTENER: {
      return {
        ...state
      };
    }

    case ON_SNAPSHOT_MY_TWEET: {
      const docs = action.payload;
      const myTweets = docs.map(doc => {
        return doc.data();
      });
      return {
        ...state,
        myTweets
      };
    }

    default: {
      return {
        ...state,
        isLoading: false
      };
    }
  }
};

export default reducer;
