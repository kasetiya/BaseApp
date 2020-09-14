import { BackgroundImage } from "@components";
import { Images } from "@config";
import { Root, Text, View } from "native-base";
import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import strings from "../../lang/strings";
import style from "./style";
import Ripple from "react-native-material-ripple";

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  gotoGetStarted() {
    this.props.navigation.navigate("GetStarted");
  }

  render() {
    return (
      <Root>
        <BackgroundImage>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 0.25 }} />
            <View style={{ ...style.welcom_container }}>
              <View>
                <Text style={{ ...style.welcom_text }}>{strings.welcome}</Text>
                <Text style={{ ...style.digital_text }}>
                  {strings.to_the_digital_world}
                </Text>
                <Text style={{ ...style.welcome_message_text }}>
                  {strings.welcome_message}
                </Text>
              </View>
              <Ripple onPress={() => this.gotoGetStarted()}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ ...style.begin_text }}>
                    {strings.let_begin}
                  </Text>
                  <Image
                    source={Images.ic_right_arrow}
                    style={{ ...style.right_arrow }}
                  />
                </View>
              </Ripple>
            </View>
            <View style={{ flex: 0.25 }} />
          </View>
        </BackgroundImage>
      </Root>
    );
  }
}

export default Welcome;
