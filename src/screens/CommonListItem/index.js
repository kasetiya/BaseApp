import { Text } from "native-base";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors, FontFamily, Images, TypoGraphy, Dimens } from "../../config";
import ShadowView from "react-native-simple-shadow-view";

const CommonListItem = ({ row, props, itemIndex, deleteAction, rowAction }) => {
  return (
    <ShadowView
      style={{
        ...styles.container,
        backgroundColor: Colors.colorWhite,
        ...TypoGraphy.shadow,
      }}
    >
      <TouchableOpacity onPress={() => rowAction()}>
        <View style={{ ...styles.inner_container }}>
          <View style={{ ...styles.item_container }}>
            <Image source={Images.ic_logo} style={{ ...styles.image }} />
            <View style={{ ...styles.texts_container }}>
              <Text style={{ ...TypoGraphy.textSemiBold17 }}>{row.name}</Text>
              <Text style={{ ...styles.description_text }}>
                {row.description}
              </Text>
              <Text style={{ ...styles.charge_text }}>₹ {row.charge}</Text>
            </View>
          </View>
          <View style={{ justifyContent: "space-evenly", marginRight: 8 }}>
            <TouchableOpacity onPress={() => deleteAction()}>
              <Image
                source={Images.ic_delete_bin}
                style={{ ...styles.call_image }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </ShadowView>
  );
};

export default CommonListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: Dimens.ms8,
    borderRadius: Dimens.ms5,
    paddingVertical: Dimens.ms8,
    paddingHorizontal: Dimens.ms8,
    marginHorizontal: Dimens.ms2,
  },
  image: {
    width: Dimens.ms60,
    height: undefined,
    aspectRatio: 1,
    borderColor: Colors.colorBorder,
    borderRadius: Dimens.ms30,
    borderWidth: Dimens.ms1,
    alignSelf: "center",
  },
  dateText: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: Dimens.ms17,
  },
  call_image: {
    width: Dimens.ms20,
    height: Dimens.ms20,
  },
  inner_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: Dimens.ms8,
  },
  item_container: {
    flexDirection: "row",
    flex: 1,
    marginVertical: Dimens.ms8,
  },
  texts_container: {
    marginHorizontal: Dimens.ms12,
    flex: 1,
  },
  description_text: {
    ...TypoGraphy.textRegular14,
    color: Colors.colorDarkGray,
    marginTop: Dimens.ms4,
  },
  charge_text: {
    ...TypoGraphy.textSemiBold17,
    marginTop: Dimens.ms16,
    color: Colors.colorGradientStart,
  },
});
