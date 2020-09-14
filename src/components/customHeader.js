import React, { Component } from "react";
import { Text, StatusBar, Platform, Image } from "react-native";
import { Header, Body, Title, Left, Icon, Right, Button } from "native-base";
import strings from "../lang/strings";
import { Colors } from "../config/colors";
import { FontFamily } from "../config/typography";

const CustomHeader = ({
  title,
  leftAction,
  rightAction,
  customLeftIcon,
  customRightIconNeeded,
  customRightIcon,
  backNeeded,
  props,
  showRight,
  icon,
}) => {
  return (
    <Header style={{ backgroundColor: Colors.colorWhite }}>
      <StatusBar />
      <Left style={{ flex: 0.5, alignItems: "center" }}>
        {backNeeded ? (
          <Button transparent onPress={() => leftAction()}>
            <Icon
              name="arrow-back"
              style={{
                width: 30,
                height: 30,
                color: Colors.colorGradientStart,
              }}
            />
          </Button>
        ) : (
          <Button transparent onPress={() => leftAction()}>
            <Image
              source={customLeftIcon}
              style={{
                width: 24,
                height: 24,
              }}
            />
          </Button>
        )}
      </Left>
      <Body
        style={{
          flex: 2,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Title
          style={{
            fontFamily: FontFamily.montserratSemiBold,
            color: Colors.colorGradientStart,
            fontSize: 17,
            textTransform: "uppercase",
          }}
        >
          {title}
        </Title>
      </Body>
      <Right style={{ flex: 0.5 }}>
        {showRight ? (
          <Button transparent onPress={() => rightAction()}>
            {customRightIconNeeded ? (
              <Image
                source={customRightIcon}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            ) : (
              <Icon
                name="add"
                style={{
                  width: 30,
                  height: 30,
                  color: Colors.colorGradientStart,
                }}
              />
            )}
          </Button>
        ) : null}
      </Right>
    </Header>
  );
};

export default CustomHeader;
