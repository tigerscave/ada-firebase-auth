import { createAction } from "redux-actions";

export const EDIT_USER_DETAIL = "EDIT_USER_DETAIL";
export const editUserDetail = createAction(EDIT_USER_DETAIL);

const INITIAL_STATE = {
  isLoading: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EDIT_USER_DETAIL: {
      return state;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
