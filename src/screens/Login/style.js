import { StyleSheet } from "react-native";
import { Colors, FontFamily, TypoGraphy, Dimens } from "@config";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    aspectRatio: 1,
    width: Dimens.ms150,
    height: undefined,
    marginTop: Dimens.ms40,
  },
  emailView_top_container: {
    marginTop: Dimens.ms40,
    alignSelf: "stretch",
  },
  passwordView_top_container: {
    marginTop: Dimens.ms20,
    alignSelf: "stretch",
  },
  text_image: {
    width: Dimens.ms20,
    height: Dimens.ms20,
  },
  welcome_text: {
    fontFamily: FontFamily.montserratBold,
    fontSize: Dimens.ms25,
    marginTop: Dimens.ms12,
  },
  login_with_dzy_text: {
    ...TypoGraphy.textRegular14,
    color: Colors.colorDarkGray,
    marginTop: Dimens.ms12,
  },
  textinput_container: {
    height: Dimens.ms60,
    borderRadius: Dimens.ms30,
    borderWidth: Dimens.ms1,
    borderColor: "transparent",
    width: "100%",
    justifyContent: "center",
    backgroundColor: Colors.colorWhite,
  },
  textInput_container_inner: {
    flexDirection: "row",
    marginHorizontal: Dimens.ms20,
    alignItems: "center",
  },
  textinput: {
    flex: 1,
    ...TypoGraphy.textRegular17,
    marginHorizontal: Dimens.ms8,
  },
  buttonLoginContainer: {
    alignSelf: "center",
    height: Dimens.ms60,
    width: "100%",
    borderRadius: Dimens.ms30,
    justifyContent: "center",
  },
  buttonLogin: {
    textAlign: "center",
    fontFamily: FontFamily.montserratBold,
    fontSize: Dimens.ms17,
    color: Colors.colorWhite,
    textTransform: "uppercase",
  },
  sign_up_text: {
    ...TypoGraphy.textSemiBold17,
    color: Colors.colorGradientStart,
  },
  shadow: {
    shadowColor: Colors.colorShadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: Dimens.ms15,
    backgroundColor: Colors.colorWhite,
  },
  button_shadow_container: {
    ...TypoGraphy.button_shadow,
    borderRadius: Dimens.ms30,
  },
});
