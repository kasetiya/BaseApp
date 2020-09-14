import AsyncStorage from "@react-native-community/async-storage";
import { ProgressDialog } from "react-native-simple-dialogs";
import { Root, Text, View } from "native-base";
import React, { Component } from "react";
import {
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Colors, TypoGraphy, Dimens, Constants, Keys } from "../../config";
import strings from "../../lang/strings";
import { isValidEmail, showToast } from "../../utils/helper";
import style from "./style";
import { Images } from "../../config/images";
import ShadowView from "react-native-simple-shadow-view";
import Ripple from "react-native-material-ripple";
import { NavigationActions, StackActions } from "react-navigation";
import { cryp } from "../../../App";
import { setToken } from "../../store/actions/setAccessToken";
import { setLoginState } from "../../store/actions/setLoginState";
import { connect } from "react-redux";
import NetInfo from "@react-native-community/netinfo";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "contact@softices.com",
      password: "123123",
      active_text_input: "",
      isProgress: false,
    };
  }

  handleLoginClick() {
    Keyboard.dismiss();
    this.props.dispatch(setLoginState(true));
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "DrawerScreen" })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  renderEmailView() {
    let text_color = Colors.colorBlack;
    let border_width = 0;
    if (this.state.active_text_input === strings.email) {
      text_color = Colors.colorGradientStart;
      border_width = Dimens.ms1;
    }
    return (
      <View style={{ ...style.emailView_top_container }}>
        <ShadowView
          style={{
            ...style.textinput_container,
            ...style.shadow,
          }}
        >
          <View
            style={{
              ...style.textinput_container,
              borderColor: text_color,
              borderWidth: border_width,
            }}
          >
            <View style={{ ...style.textInput_container_inner }}>
              <Image
                source={Images.ic_email_user}
                style={{ ...style.text_image, tintColor: text_color }}
              />
              <TextInput
                ref={(input) => {
                  this.emailInput = input;
                }}
                autoCapitalize="none"
                placeholder={strings.email}
                returnKeyType={"next"}
                placeholderTextColor={Colors.colorPlaceholder}
                editable={true}
                numberOfLines={1}
                keyboardType={"email-address"}
                value={this.state.email}
                onChangeText={(text) => this.setState({ email: text })}
                style={{
                  ...style.textinput,
                  color: text_color,
                }}
                onSubmitEditing={() => this.passwordInput.focus()}
                onFocus={() =>
                  this.setState({ active_text_input: strings.email })
                }
                onBlur={() => this.setState({ active_text_input: "" })}
              />
            </View>
          </View>
        </ShadowView>
      </View>
    );
  }

  renderPasswordView() {
    let text_color = Colors.colorBlack;
    let border_width = 0;
    if (this.state.active_text_input === strings.password) {
      text_color = Colors.colorGradientStart;
      border_width = Dimens.ms1;
    }
    return (
      <View style={{ ...style.passwordView_top_container }}>
        <ShadowView
          style={{
            ...style.textinput_container,
            ...style.shadow,
          }}
        >
          <View
            style={{
              ...style.textinput_container,
              borderColor: text_color,
              borderWidth: border_width,
            }}
          >
            <View style={{ ...style.textInput_container_inner }}>
              <Image
                source={Images.ic_password}
                style={{ ...style.text_image, tintColor: text_color }}
              />
              <TextInput
                ref={(input) => {
                  this.passwordInput = input;
                }}
                placeholder={strings.password}
                returnKeyType={"done"}
                placeholderTextColor={Colors.colorPlaceholder}
                editable={true}
                numberOfLines={1}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text) => this.setState({ password: text })}
                style={{ ...style.textinput, color: text_color }}
                onFocus={() =>
                  this.setState({ active_text_input: strings.password })
                }
                onBlur={() => this.setState({ active_text_input: "" })}
              />
            </View>
          </View>
        </ShadowView>
      </View>
    );
  }

  handleForgotPassword = () => {
    console.log("Forgot password");
  };

  renderForgotPassword() {
    return (
      <View
        style={{
          marginTop: Dimens.ms12,
          alignSelf: "stretch",
        }}
      >
        <View style={{ alignSelf: "flex-end" }}>
          <Ripple onPress={this.handleForgotPassword} rippleCentered={true}>
            <Text style={{ ...TypoGraphy.textSemiBold14 }}>
              {strings.forgot_password}
            </Text>
          </Ripple>
        </View>
      </View>
    );
  }

  renderLoginButton() {
    return (
      <View
        style={{
          marginTop: Dimens.ms20,
          alignSelf: "stretch",
        }}
      >
        <Ripple
          onPress={() => this.handleLoginClick()}
          activeOpacity={0.6}
          rippleContainerBorderRadius={Dimens.ms30}
          rippleCentered={true}
          style={{
            marginVertical: Dimens.ms20,
            width: "60%",
            alignSelf: "center",
            borderRadius: Dimens.ms30,
          }}
        >
          <ShadowView style={{ ...style.button_shadow_container }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={[Colors.colorGradientStart, Colors.colorGradientEnd]}
              style={{ ...style.buttonLoginContainer }}
            >
              <Text style={{ ...style.buttonLogin }}>{strings.login}</Text>
            </LinearGradient>
          </ShadowView>
        </Ripple>
      </View>
    );
  }

  renderSignUpView() {
    return (
      <View style={{ alignItems: "center", marginBottom: Dimens.ms20 }}>
        <Text style={{ ...TypoGraphy.textRegular14 }}>
          {strings.dont_have_account}
        </Text>
        <Ripple
          onPress={() => this.props.navigation.navigate("Signup")}
          rippleCentered={true}
          style={{ marginTop: Dimens.ms8 }}
        >
          <Text style={{ ...style.sign_up_text }}>{strings.sign_up}</Text>
        </Ripple>
      </View>
    );
  }

  render() {
    return (
      <Root>
        <StatusBar />
        <SafeAreaView
          forceInset={{ top: "always" }}
          style={{ flex: 1, backgroundColor: Colors.colorWhite }}
        >
          <ScrollView bounces={false}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                marginHorizontal: Dimens.ms32,
              }}
            >
              <Image
                source={Images.ic_login_screen}
                style={{ ...style.logo }}
              />
              <Text style={{ ...style.welcome_text }}>{strings.welcome} ,</Text>
              <Text style={{ ...style.login_with_dzy_text }}>
                {strings.log_in_to_your_existant_account_of_dzy}
              </Text>

              {this.renderEmailView()}
              {this.renderPasswordView()}
              {this.renderForgotPassword()}
              {this.renderLoginButton()}
              {this.renderSignUpView()}
            </View>
          </ScrollView>

          <ProgressDialog
            activityIndicatorColor={Colors.colorGradientStart}
            visible={this.state.isProgress}
            message={strings.loading}
          />
        </SafeAreaView>
      </Root>
    );
  }
}

function mapStateToProps(state) {
  const { sessionReducer } = state;
  return {
    token: sessionReducer,
  };
}

export default connect(mapStateToProps)(Login);
