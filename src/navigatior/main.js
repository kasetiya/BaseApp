import { Colors, FontFamily } from "@config";
import Dashboard from "@screens/Dashboard";
import Login from "@screens/Login";
import Sidemenu from "@screens/Sidemenu";
import Welcome from "@screens/Welcome";
import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import {
  createStackNavigator,
  TransitionPresets,
} from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import GetStarted from "@screens/GetStarted";
import DrawerScreen from "./DrawerHolder";

import MensProducts from "../screens/MensProducts/index";
import WomensProducts from "../screens/WomensProducts/index";
import JweleyProducts from "../screens/JweleryProducts/index";
import ElectroincsProducts from "../screens/ElectronicsProducts/index";

const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Welcome: {
      screen: Welcome,
    },
    GetStarted: {
      screen: GetStarted,
    },
    Sidemenu: {
      screen: Sidemenu,
    },
    Dashboard: {
      screen: Dashboard,
    },
    DrawerScreen: {
      screen: DrawerScreen,
    },
    MensProducts: {
      screen: MensProducts,
    },
    WomensProducts: {
      screen: WomensProducts,
    },
    JweleyProducts: {
      screen: JweleyProducts,
    },
    ElectroincsProducts: {
      screen: ElectroincsProducts,
    },
  },
  {
    headerMode: "none",
    initialRouteName: "Welcome",
  }
);

const AppNavigator = createAppContainer(StackNavigator);
export default AppNavigator;
