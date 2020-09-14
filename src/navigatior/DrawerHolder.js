const width = Dimensions.get("screen").width;
import React from "react";
import { Dimensions } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerRoutes } from "react-navigation-drawer";
import { Colors } from "../config/colors";
import Dashboard from "@screens/Dashboard";
import Sidemenu from "@screens/Sidemenu";
import MensProducts from "../screens/MensProducts/index";
import WomensProducts from "../screens/WomensProducts/index";
import JweleyProducts from "../screens/JweleryProducts/index";
import ElectroincsProducts from "../screens/ElectronicsProducts/index";

const MyDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: Dashboard,
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
    initialRouteName: "Dashboard",
    drawerPosition: "left",
    drawerOpenRoute: "DrawerOpen",
    contentComponent: ({ navigation, activeItemKey }) => (
      <Sidemenu
        currentScreen={activeItemKey}
        navigation={navigation}
        routes={DrawerRoutes}
      />
    ),
    drawerWidth: width - width / 4,
    // unmountInactiveRoutes: true,
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    contentOptions: {
      tweenDuration: 10,
      activeTintColor: Colors.primaryColor,
      activeBackgroundColor: "transparent",
      inactiveTintColor: Colors.colorBlack,
      inactiveBackgroundColor: "transparent",
      labelStyle: {
        fontSize: 15,
        marginLeft: 10,
      },
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 10,
      },
    }),
  }
);

const DrawerScreen = createAppContainer(MyDrawerNavigator);

export default DrawerScreen;
