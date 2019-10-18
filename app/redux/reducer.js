import { LOGIN_ACTION, LOGOUT_ACTION } from "./actions";

const reducer = (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return { ...state, isLoggedIn: true };
    case LOGOUT_ACTION:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};
