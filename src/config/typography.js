import { StyleSheet } from "react-native";
import { Colors } from "./colors";
import Dimens from "./reponsiveSize";

export const FontFamily = {
  montserratThin: "Montserrat-Thin",
  montserratSemiBold: "Montserrat-SemiBold",
  montserratRegular: "Montserrat-Regular",
  montserratMedium: "Montserrat-Medium",
  montserratLight: "Montserrat-Light",
  montserratBold: "Montserrat-Bold",
};

export const TypoGraphy = {
  textRegular17: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: Dimens.ms17,
    color: Colors.colorBlack,
  },
  textRegular14: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: Dimens.ms14,
    color: Colors.colorBlack,
  },
  textRegular11: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: Dimens.ms11,
    color: Colors.colorBlack,
  },
  textMedium17: {
    fontFamily: FontFamily.montserratMedium,
    fontSize: Dimens.ms17,
    color: Colors.colorBlack,
  },
  textMedium14: {
    fontFamily: FontFamily.montserratMedium,
    fontSize: Dimens.ms14,
    color: Colors.colorBlack,
  },
  textMedium11: {
    fontFamily: FontFamily.montserratMedium,
    fontSize: Dimens.ms11,
    color: Colors.colorBlack,
  },
  textMedium14AppColor: {
    fontFamily: FontFamily.montserratMedium,
    fontSize: Dimens.ms14,
    color: Colors.colorGradientStart,
  },
  textSemiBold17: {
    fontFamily: FontFamily.montserratSemiBold,
    fontSize: Dimens.ms17,
    color: Colors.colorBlack,
  },
  textSemiBold22: {
    fontFamily: FontFamily.montserratSemiBold,
    fontSize: Dimens.ms22,
    color: Colors.colorBlack,
  },
  textSemiBold14: {
    fontFamily: FontFamily.montserratSemiBold,
    fontSize: Dimens.ms14,
    color: Colors.colorBlack,
  },
  textSemiBold11: {
    fontFamily: FontFamily.montserratSemiBold,
    fontSize: Dimens.ms11,
    color: Colors.colorBlack,
  },
  seperator: {
    backgroundColor: Colors.colorSeperator,
    marginTop: Dimens.ms2,
    height: Dimens.ms1,
  },

  buttonSubmitContainer: {
    alignSelf: "center",
    height: Dimens.ms50,
    width: "100%",
    borderRadius: Dimens.ms5,
    justifyContent: "center",
  },
  buttonSubmit: {
    textAlign: "center",
    fontFamily: FontFamily.montserratSemiBold,
    fontSize: Dimens.ms17,
    color: Colors.colorWhite,
  },
  noLabelContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    shadowColor: Colors.colorShadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: Dimens.ms4,
    // elevation: Dimens.ms4,
    backgroundColor: Colors.colorWhite,
  },
  flatlist_vertical_margin: {
    marginTop: Dimens.ms8,
    marginBottom: Dimens.ms20,
  },
  button_shadow: {
    shadowColor: Colors.colorShadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: Dimens.ms4,
    // elevation: Dimens.ms4,
    backgroundColor: Colors.colorWhite,
  },
};
