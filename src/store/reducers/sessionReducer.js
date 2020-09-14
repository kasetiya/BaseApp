import { Constants } from "../../config";

const SessionReducer = (token = "", action) => {
  switch (action.type) {
    case Constants.SET_TOKEN:
      token = action.token;
      return token;
  }
  return token;
};

export default SessionReducer;
