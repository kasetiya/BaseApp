import { StyleSheet } from "react-native";
import { Colors, FontFamily, TypoGraphy, Dimens } from "../../config";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  welcom_container: {
    marginLeft: Dimens.ms40,
    marginRight: Dimens.ms80,
    flex: 0.5,
    justifyContent: "space-between",
  },
  welcom_text: {
    color: Colors.colorWhite,
    textTransform: "uppercase",
    fontSize: Dimens.ms35,
    fontFamily: FontFamily.montserratBold,
  },
  digital_text: {
    ...TypoGraphy.textSemiBold17,
    color: Colors.colorWhite,
    marginTop: Dimens.ms20,
  },
  welcome_message_text: {
    marginTop: Dimens.ms16,
    fontFamily: FontFamily.montserratRegular,
    fontSize: Dimens.ms15,
    color: Colors.colorWhite,
    lineHeight: Dimens.ms25,
  },
  begin_text: {
    ...TypoGraphy.textSemiBold17,
    color: Colors.colorWhite,
  },
  right_arrow: {
    width: Dimens.ms14,
    height: Dimens.ms14,
    alignSelf: "center",
    marginLeft: Dimens.ms12,
  },
});
