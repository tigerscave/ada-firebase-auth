import { createAction } from "redux-actions";

export const EDIT_USER_DETAIL = "EDIT_USER_DETAIL";
export const editUserDetail = createAction(EDIT_USER_DETAIL);

export const SEARCH_USER = "SEARCH_USER";
export const searchUser = createAction(SEARCH_USER);

export const SEARCH_USER_SUCCEED = "SEARCH_USER_SUCCEED";
export const searchUserSucceed = createAction(SEARCH_USER_SUCCEED);

const INITIAL_STATE = {
  isLoading: false,
  searchedUser: null
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

    default: {
      return state;
    }
  }
};

export default reducer;
