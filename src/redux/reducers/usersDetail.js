import { createAction } from "redux-actions";

export const EDIT_USER_DETAIL = "EDIT_USER_DETAIL";
export const editUserDetail = createAction(EDIT_USER_DETAIL);

export const SEARCH_USER = "SEARCH_USER";
export const searchUser = createAction(SEARCH_USER);

export const SEARCH_USER_SUCCEED = "SEARCH_USER_SUCCEED";
export const searchUserSucceed = createAction(SEARCH_USER_SUCCEED);

export const DISPLAY_TWEETS_DETAIL = "DISPLAY_TWEETS_DETAIL";
export const displayTweetsDetail = createAction(DISPLAY_TWEETS_DETAIL);

export const DISPLAY_TWEETS_DETAIL_SUCCEED = "DISPLAY_TWEETS_DETAIL_SUCCEED";
export const displayTweetsDetailSucceed = createAction(
  DISPLAY_TWEETS_DETAIL_SUCCEED
);

displayTweetsDetailSucceed;
const INITIAL_STATE = {
  isLoading: false,
  searchedUser: null,
  followers: null,
  following: null,
  myPostedTweets: null,
  myTweetsLength: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EDIT_USER_DETAIL: {
      return state;
    }

    case SEARCH_USER: {
      return {
        ...state,
        isLoading: true
      };
    }

    case SEARCH_USER_SUCCEED: {
      const searchedUser = action.payload;
      return {
        ...state,
        searchedUser,
        isLoading: false
      };
    }

    case DISPLAY_TWEETS_DETAIL: {
      return {
        ...state
      };
    }

    case DISPLAY_TWEETS_DETAIL_SUCCEED: {
      const { docs, size } = action.payload;
      const myPostedTweets = docs.map(doc => {
        return {
          tweetId: doc.id,
          ...doc.data()
        };
      });
      return {
        ...state,
        myPostedTweets,
        myTweetsLength: size
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
