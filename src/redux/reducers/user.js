import { createAction } from "redux-actions";

export const CREATE_USER = "CREATE_USER";
export const createUser = createAction(CREATE_USER);

export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const createUserSuccess = createAction(CREATE_USER_SUCCESS);

export const CREATE_USER_FAILED = "CREATE_USER_FAILED";
export const createUserFailed = createAction(CREATE_USER_FAILED);

export const CHECK_USER_AUTH = "CHECK_USER_AUTH";
export const checkUserAuth = createAction(CHECK_USER_AUTH);

const INITIAL_STATE = {
  isLoading: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER: {
      return {
        ...state,
        isLoading: true
      };
    }

    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }

    case CREATE_USER_FAILED: {
      return {
        ...state
      };
    }

    case CHECK_USER_AUTH: {
      return {
        ...state
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
