import { Toast } from "native-base";
import { StyleSheet, Linking } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import { FontFamily, Colors } from "@config";
import AsyncStorage from "@react-native-community/async-storage";
import { Dimens } from "../config";
// import { setToken } from "../store/actions/setAccessToken";

export const navigateBack = (props) => {
  props.navigation.goBack();
};

export const logout = (props) => {
  AsyncStorage.clear();
  //   props.dispatch(setToken(""));
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "Login" })],
  });
  props.navigation.dispatch(resetAction);
};

export function isNull(data) {
  if (data == "" || data == "null" || data === null) {
    return true;
  } else {
    false;
  }
}

export const showToast = (message) => {
  Toast.show({
    text: message,
    textStyle: {
      color: Colors.colorWhite,
      fontSize: Dimens.ms17,
      fontFamily: FontFamily.montserratRegular,
    },
    duration: 2000,
  });
};

export function isValidEmail(text) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text);
}

export function objToQueryString(obj) {
  const keyValuePairs = [];
  for (const key in obj) {
    keyValuePairs.push(
      encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
    );
  }
  return keyValuePairs.join("&");
}
