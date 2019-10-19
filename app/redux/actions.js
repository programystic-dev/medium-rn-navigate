import { NavigationService } from "../navigator";

export const LOGIN_ACTION = "LOGIN_ACTION";
export const LOGOUT_ACTION = "LOGOUT_ACTION";

export const login = () => dispatch => {
  dispatch({ type: LOGIN_ACTION });
  NavigationService.navigate("Logout");
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_ACTION });
  NavigationService.navigate("Login");
};
