import { createAction } from "redux-actions";

export const CREATE_TWEET = "CREATE_TWEET";
export const createTweet = createAction(CREATE_TWEET);

export const DISPLAY_LATEST_TWEET = "DISPLAY_LATEST_TWEET";
export const displayLatestTweets = createAction(DISPLAY_LATEST_TWEET);

export const MY_TWEET_LISTENER = "MY_TWEET_LISTENER";
export const myTweetListener = createAction(MY_TWEET_LISTENER);

export const ON_SNAPSHOT_MY_TWEET = "ON_SNAPSHOT_MY_TWEET";
export const onSnapshotMyTweet = createAction(ON_SNAPSHOT_MY_TWEET);

export const DELETE_MY_TWEET = "DELETE_MY_TWEET";
export const deleteMyTweet = createAction(DELETE_MY_TWEET);

export const EDIT_MY_TWEET = "EDIT_MY_TWEET";
export const editMyTweet = createAction(EDIT_MY_TWEET);

export const SEARCH_TWEET_TAG = "SEARCH_TWEET_TAG";
export const searchTweetTag = createAction(SEARCH_TWEET_TAG);

export const SEARCH_TWEET_TAG_SUCCEED = "SEARCH_TWEET_TAG_SUCCEED";
export const searchTweetTagSucceed = createAction(SEARCH_TWEET_TAG_SUCCEED);

const INITIAL_STATE = {
  isLoading: false,
  isSearching: false,
  latestTweet: null,
  myTweets: [],
  searchedTweetsTag: null
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
      return state;
    }

    case ON_SNAPSHOT_MY_TWEET: {
      const docs = action.payload;
      const myTweets = docs.map(doc => {
        return {
          tweetId: doc.id,
          ...doc.data()
        };
      });
      return {
        ...state,
        myTweets
      };
    }

    case DELETE_MY_TWEET: {
      return state;
    }

    case EDIT_MY_TWEET: {
      return state;
    }

    case SEARCH_TWEET_TAG: {
      return {
        ...state,
        isSearching: true
      };
    }

    case SEARCH_TWEET_TAG_SUCCEED: {
      const docs = action.payload;
      const searchedTweetsTag = docs.map(doc => {
        return {
          tweetId: doc.id,
          ...doc.data()
        };
      });
      return {
        ...state,
        searchedTweetsTag,
        isSearching: false
      };
    }

    default: {
      return {
        ...state,
        isLoading: false,
        isSearching: false
      };
    }
  }
};

export default reducer;
