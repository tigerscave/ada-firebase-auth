import { createAction } from "redux-actions";

export const USERS_DETAIL = "USERS_DETAIL";
export const usersDetail = createAction(USERS_DETAIL);

const INITIAL_STATE = {
  isLoading: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_DETAIL: {
      return state;
    }
  }
};

export default reducer;
