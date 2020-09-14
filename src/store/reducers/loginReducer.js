import { Constants } from "../../config";

const LoginReducer = (isLoggedIn = "false", action) => {
  switch (action.type) {
    case Constants.SET_LOGIN:
      isLoggedIn = action.isLoggedIn;
      return isLoggedIn;
  }
  return isLoggedIn;
};

export default LoginReducer;
