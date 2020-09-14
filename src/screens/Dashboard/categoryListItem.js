import { Text } from "native-base";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Colors, FontFamily, TypoGraphy, Dimens } from "../../config";
import ShadowView from "react-native-simple-shadow-view";

const categoryListItem = ({ row, props, itemIndex }) => {
  let backgroundColor = Colors.colorBackground;
  let textColor = Colors.colorBlack;
  if (row.isSelected) {
    backgroundColor = Colors.colorGradientStart;
    textColor = Colors.colorWhite;
  }

  return (
    <ShadowView style={{ ...styles.container }}>
      <Image source={row.image} style={{ ...styles.image }} />
      <Text style={{ ...styles.dateText, color: textColor }}>{row.name}</Text>
    </ShadowView>
  );
};

export default categoryListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Dimens.ms8,
    borderRadius: Dimens.ms8,
    backgroundColor: Colors.colorWhite,
    ...TypoGraphy.shadow,
    marginVertical: Dimens.ms6,
    width: Dimens.ms95,
    height: Dimens.ms95,
    justifyContent: "center",
  },
  image: {
    marginTop: Dimens.ms20,
    marginBottom: Dimens.ms6,
    alignSelf: "center",
    width: Dimens.ms24,
    height: undefined,
    aspectRatio: 1,
    borderColor: Colors.colorBorder,
  },
  dateText: {
    ...TypoGraphy.textMedium11,
    alignSelf: "center",
    // marginHorizontal: Dimens.ms10,
    marginBottom: Dimens.ms20,
  },
});
