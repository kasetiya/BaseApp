import { StyleSheet } from "react-native";
import { Colors, FontFamily, TypoGraphy, Dimens } from "../../config";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  profile_image: {
    width: Dimens.ms60,
    height: Dimens.ms60,
    alignSelf: "center",
    marginLeft: Dimens.ms16,
  },
  sidemenu_image: {
    height: Dimens.ms24,
    width: Dimens.ms24,
    marginVertical: Dimens.ms6,
    marginRight: Dimens.ms24,
  },
});
