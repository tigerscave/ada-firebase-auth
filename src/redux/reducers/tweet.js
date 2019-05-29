import { createAction } from "redux-actions";

export const CREATE_TWEET = "CREATE_TWEET";
export const createTweet = createAction(CREATE_TWEET);

export const DISPLAY_TWEETS = "DISPLAY_TWEETS";
export const displayTweets = createAction(DISPLAY_TWEETS);

const INITIAL_STATE = {
  isLoading: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_TWEET: {
      return {
        ...state,
        isLoading: true
      };
    }

    case DISPLAY_TWEETS: {
      const { docs } = action.payload;
      console.log("display tweets: ", docs);
      return {
        ...state
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
