import { createAction } from "redux-actions";

export const USER_LOGIN = "USER_LOGIN";
export const userLogin = createAction(USER_LOGIN);

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const loginSuccess = createAction(LOGIN_SUCCESS);

export const LOGIN_FAILED = "LOGIN_FAILED";
export const loginFailed = createAction(LOGIN_FAILED);

export const CHECK_USER_AUTH = "CHECK_USER_AUTH";
export const checkUserAuth = createAction(CHECK_USER_AUTH);

const INITIAL_STATE = {
  isLoading: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        isLoading: true
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }

    case LOGIN_FAILED: {
      return {
        ...state,
        isLoading: false
      };
    }

    case CHECK_USER_AUTH: {
      return {
        ...state,
        isLoading: true
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
