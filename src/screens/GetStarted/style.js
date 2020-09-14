import { StyleSheet } from "react-native";
import { Colors, FontFamily, TypoGraphy, Dimens } from "../../config";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title_text: {
    fontSize: Dimens.ms30,
    fontFamily: FontFamily.montserratBold,
    lineHeight: Dimens.ms40,
  },
  description_text: {
    ...TypoGraphy.textRegular17,
    marginTop: Dimens.ms12,
    color: Colors.colorGray,
    marginRight: Dimens.ms24,
    lineHeight: Dimens.ms30,
  },
  get_started_button_container: {
    alignSelf: "center",
    height: Dimens.ms60,
    width: "100%",
    borderRadius: Dimens.ms5,
    justifyContent: "center",
  },
  get_started_button: {
    textAlign: "center",
    fontFamily: FontFamily.montserratBold,
    fontSize: Dimens.ms20,
    color: Colors.colorWhite,
  },
  button_shadow_container: {
    ...TypoGraphy.button_shadow,
    borderRadius: Dimens.ms5,
  },
});
