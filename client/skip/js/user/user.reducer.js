import UserActionTypes from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
};

const userRedicer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /*   case UserActionTypes.GOOGLE_SIGN_IN_START:
    case UserActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      }; */
    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    default:
      return state;
  }
};

export default userRedicer;
