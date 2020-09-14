import urlEndPoints from "./urlEndPoints";
import constants from "../config/constants";

export const requestForProductList = () => {
  var url = urlEndPoints.product;

  var request = {
    method: "GET",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
  };
  return fetch(url, request);
};
