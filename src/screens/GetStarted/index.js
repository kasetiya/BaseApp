import { Root, Text, View } from "native-base";
import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Pages } from "react-native-pages";
import { Colors, Dimens } from "../../config";
import strings from "../../lang/strings";
import style from "./style";
import { Images } from "../../config/images";
import Ripple from "react-native-material-ripple";
import ShadowView from "react-native-simple-shadow-view";

class GetStarted extends Component {
  constructor(props) {
    super(props);
  }

  gotoSearch = () => {
    this.props.navigation.navigate("Login");
  };

  renderDetailView = (image, title, description) => {
    return (
      <View style={{ flex: 1, marginHorizontal: Dimens.ms32 }}>
        {/* <View style={{ flex: 0.1 }} /> */}

        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ ...style.title_text }}>{strings.click_to}</Text>
          <Text style={{ ...style.title_text }}>{title}</Text>
          <Image
            source={image}
            style={{
              width: undefined,
              height: "40%",
              aspectRatio: 1,
              marginVertical: Dimens.ms40,
              alignSelf: "center",
            }}
          />
          <Text style={{ ...style.description_text }}>{description}</Text>
        </View>
      </View>
    );
  };

  renderGetStartedButton = () => {
    return (
      <Ripple
        onPress={() => this.gotoSearch()}
        activeOpacity={0.6}
        style={{
          marginHorizontal: Dimens.ms12,
          marginVertical: Dimens.ms20,
          justifyContent: "flex-end",
        }}
      >
        <ShadowView style={{ ...style.button_shadow_container }}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[Colors.colorGradientStart, Colors.colorGradientEnd]}
            style={{ ...style.get_started_button_container }}
          >
            <Text style={{ ...style.get_started_button }}>
              {strings.get_started}
            </Text>
          </LinearGradient>
        </ShadowView>
      </Ripple>
    );
  };

  render() {
    return (
      <Root>
        <View style={{ flex: 1 }}>
          <Pages indicatorColor={"#D90752"}>
            {this.renderDetailView(
              Images.ic_call_walk,
              strings.call,
              strings.click_to_call_description
            )}
            {this.renderDetailView(
              Images.ic_whatsapp_walk,
              strings.whatsapp,
              strings.click_to_whats_app_description
            )}
            {this.renderDetailView(
              Images.ic_location_walk,
              strings.navigate,
              strings.click_to_navigate_decription
            )}
          </Pages>
        </View>
        <View
          style={{
            marginHorizontal: Dimens.ms20,
            justifyContent: "flex-end",
          }}
        >
          <View style={{ marginBottom: Dimens.ms20 }}>
            {this.renderGetStartedButton()}
          </View>
        </View>
      </Root>
    );
  }
}
export default GetStarted;
