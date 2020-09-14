import { Container, Root, View } from "native-base";
import React, { Component } from "react";
import { FlatList, Image, Text, TouchableOpacity } from "react-native";
import { DrawerActions } from "react-navigation-drawer";
import CustomHeader from "../../components/customHeader";
import { Colors, Dimens, Images, TypoGraphy } from "../../config";
import strings from "../../lang/strings";
import ShadowView from "react-native-simple-shadow-view";

class MensProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_list: props.navigation.getParam("product_list", []),
      filter: props.navigation.getParam("filter", ""),
      filtered_product: [],
    };
  }

  componentDidMount() {
    const filteredProducts = this.state.product_list.filter(
      (x) => x.category === this.state.filter
    );
    this.setState({
      filtered_product: filteredProducts,
    });
  }

  renderProductList() {
    return (
      <FlatList
        listKey={(item, index) => "B" + index.toString()}
        keyExtractor={(item, index) => index.toString()}
        bounces={false}
        contentContainerStyle={{
          marginHorizontal: Dimens.ms6,
          marginTop: Dimens.ms10,
        }}
        data={this.state.filtered_product}
        numColumns={2}
        renderItem={({ item, index }) => (
          <ShadowView
            style={{
              flex: 0.5,
              marginHorizontal: Dimens.ms6,
              borderRadius: Dimens.ms8,
              ...TypoGraphy.shadow,
              marginVertical: Dimens.ms6,
            }}
          >
            <TouchableOpacity onPress={() => console.log("")}>
              <Image
                source={{ uri: item.image }}
                style={{
                  height: undefined,
                  width: "100%",
                  aspectRatio: 1,
                  borderTopLeftRadius: Dimens.ms8,
                  borderTopRightRadius: Dimens.ms8,
                }}
              />
              <View
                style={{
                  height: Dimens.ms50,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.colorWhite,
                  borderBottomLeftRadius: Dimens.ms8,
                  borderBottomRightRadius: Dimens.ms8,
                }}
              >
                <Text
                  numberOfLines={2}
                  style={{
                    ...TypoGraphy.textRegular11,
                    margin: Dimens.ms8,
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          </ShadowView>
        )}
      />
    );
  }

  openDrawer() {
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  }

  render() {
    return (
      <Root>
        <Container>
          <CustomHeader
            title={this.state.filter}
            leftAction={() => this.openDrawer()}
            customLeftIcon={Images.ic_menu}
            props={this.props}
          />

          <View>{this.renderProductList()}</View>
        </Container>
      </Root>
    );
  }
}

export default MensProducts;
