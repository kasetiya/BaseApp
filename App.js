import React, { Component } from "react";
import { Root } from "native-base";
import AppNavigator from "./src/navigatior/main";
import "./shim.js";
export const cryp = require("crypto");
import { Provider } from "react-redux";
import store from "./src/store/store";

export default class App extends Component {
  render() {
    return (
      <Root>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </Root>
    );
  }
}
