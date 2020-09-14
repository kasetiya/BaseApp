import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../config/colors";
import { Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TypoGraphy } from "../config";

const SubmitButton = ({ title, buttonAction }) => {
  return (
    <TouchableOpacity
      onPress={() => buttonAction()}
      activeOpacity={0.6}
      style={{
        marginHorizontal: 12,
        marginVertical: 20,
        justifyContent: "flex-end",
      }}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[Colors.colorGradientStart, Colors.colorGradientEnd]}
        style={TypoGraphy.buttonSubmitContainer}
      >
        <Text style={{ ...TypoGraphy.buttonSubmit }}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default SubmitButton;
