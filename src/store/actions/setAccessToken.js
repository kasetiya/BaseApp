import { Constants } from "../../config";

export const setToken = (token) => ({
  type: Constants.SET_TOKEN,
  token,
});
