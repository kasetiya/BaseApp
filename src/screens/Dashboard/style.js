import { StyleSheet } from "react-native";
import { Colors, FontFamily, TypoGraphy, Dimens } from "../../config";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  dashboard_text: {
    fontFamily: FontFamily.montserratBold,
    fontSize: Dimens.ms25,
    marginTop: Dimens.ms16,
    marginLeft: Dimens.ms16,
    marginBottom: Dimens.ms8,
    color: Colors.colorWhite,
  },
  search_image: {
    width: Dimens.ms20,
    height: Dimens.ms20,
    alignSelf: "center",
    marginLeft: Dimens.ms12,
  },
  search_container: {
    borderRadius: Dimens.ms5,
    height: Dimens.ms50,
    marginTop: Dimens.ms24,
    justifyContent: "center",
    borderWidth: Dimens.ms1,
    borderColor: Colors.colorBorder,
    flexDirection: "row",
  },
  search_textInput: {
    flex: 1,
    ...TypoGraphy.textRegular17,
    paddingHorizontal: Dimens.ms12,
  },
});
