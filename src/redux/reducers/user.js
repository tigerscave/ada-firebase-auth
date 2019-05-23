import { createAction } from "redux-actions";

export const CREATE_USER = "CREATE_USER";
export const createUser = createAction(CREATE_USER);

export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const createUserSuccess = createAction(CREATE_USER_SUCCESS);

export const CREATE_USER_FAILED = "CREATE_USER_FAILED";
export const createUserFailed = createAction(CREATE_USER_FAILED);

export const CHECK_USER_AUTH = "CHECK_USER_AUTH";
export const checkUserAuth = createAction(CHECK_USER_AUTH);

export const SET_USER = "SET_USER";
export const setUser = createAction(SET_USER);

export const CLEAR_USER = "CLEAR_USER";
export const clearUser = createAction(CLEAR_USER);

const INITIAL_STATE = {
  isLoading: false,
  userCredential: null
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

    case SET_USER: {
      const user = action.payload;
      return {
        ...state,
        isLoading: false,
        userCredential: user
      };
    }

    case CLEAR_USER: {
      return {
        ...state,
        userCredential: null
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
