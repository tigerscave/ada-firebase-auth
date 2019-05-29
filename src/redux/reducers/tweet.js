import { createAction } from "redux-actions";

export const CREATE_TWEET = "CREATE_TWEET";
export const createTweet = createAction(CREATE_TWEET);

export const DISPLAY_TWEETS = "DISPLAY_TWEETS";
export const displayTweets = createAction(DISPLAY_TWEETS);

export const FETCH_LATEST_TWEET_SUCCESS = "FETCH_LATEST_TWEET_SUCCESS";
export const fetchLatestTweetSuccess = createAction(FETCH_LATEST_TWEET_SUCCESS);

export const FETCH_LATEST_TWEET_FAILED = "FETCH_LATEST_TWEET_FAILED";
export const fetchLatestTweetFailed = createAction(FETCH_LATEST_TWEET_FAILED);

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
        isLoading: true,
        myTweets: []
      };
    }

    case DISPLAY_TWEETS: {
      //const { docs } = action.payload;
      //console.log("display tweets: ", docs);
      return {
        ...state
      };
    }

    case FETCH_LATEST_TWEET_SUCCESS: {
      const docs = action.payload;
      console.log(docs[0].data());
      const latestTweet = docs.length > 0 ? docs[0].data() : null;
      return {
        ...state,
        latestTweet
      };
    }

    case FETCH_LATEST_TWEET_FAILED: {
      return {
        ...state
      };
    }

    case MY_TWEET_LISTENER: {
      return {
        ...state
      };
    }

    case ON_SNAPSHOT_MY_TWEET: {
      const docs = action.payload;
      console.log("ON_SNAPSHOT_MY_TWEET", docs);
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
