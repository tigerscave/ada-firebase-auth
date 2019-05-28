import { createAction } from "redux-actions";

export const CREATE_TWEET = "CREATE_TWEET";
export const createTweet = createAction(CREATE_TWEET);

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

    default: {
      return {
        ...state,
        isLoading: false
      };
    }
  }
};

export default reducer;
