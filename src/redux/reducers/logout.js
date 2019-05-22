import { createAction } from "redux-actions";

export const USER_LOGOUT = "USER_LOGOUT";
export const userLogout = createAction(USER_LOGOUT);

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const logoutSuccess = createAction(LOGOUT_SUCCESS);

export const LOGOUT_FAILED = "LOGOUT_FAILED";
export const logoutFailed = createAction(LOGOUT_FAILED);

const INITIAL_STATE = {
  isLoading: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGOUT: {
      return {
        ...state,
        isLoading: true
      };
    }

    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }

    case LOGOUT_FAILED: {
      return {
        ...state,
        isLoading: false
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
