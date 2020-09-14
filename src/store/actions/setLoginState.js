import { Constants } from "../../config";

export const setLoginState = (isLoggedIn) => ({
  type: Constants.SET_LOGIN,
  isLoggedIn,
});
