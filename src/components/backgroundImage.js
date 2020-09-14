import React from "react";
import { ImageBackground } from "react-native";

const BackgroundImage = ({ children }) => {
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      {children}
    </ImageBackground>
  );
};

export default BackgroundImage;
