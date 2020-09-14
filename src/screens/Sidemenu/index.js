import { Container, Text, View } from "native-base";
import React, { Component } from "react";
import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { DrawerActions } from "react-navigation-drawer";
import { connect } from "react-redux";
import { Colors, Constants, Dimens, Images, TypoGraphy } from "../../config";
import strings from "../../lang/strings";
import { logout } from "../../utils/helper";
import style from "./style";
import NetInfo from "@react-native-community/netinfo";
import { requestForProductList } from "../../webServices/productListingService";

class Sidemenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      product_list: [],
      sidemenu_data: [
        {
          key: "Home",
        },
      ],
    };
  }

  componentDidMount() {
    this.callForProductList();
  }

  callForProductList() {
    var statusCode;

    this.setState({ isProgress: true });
    requestForProductList()
      .then((response) => {
        statusCode = response.status;
        return response.json();
      })
      .then((responseJson) => {
        this.setState({ isProgress: false });
        this.parseProductListResponse(statusCode, responseJson);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isProgress: false });
        showToast(strings.something_went_wrong);
      });
  }

  parseProductListResponse = (statusCode, res) => {
    if (statusCode === 200 || statusCode === 201) {
      var categoryList = [];
      for (let i = 0; i < res.length; i++) {
        categoryList.push(res[i].category);
      }

      var uniqueCategoryList = Array.from(new Set(categoryList));

      var categoryListKey = [];
      for (let i = 0; i < uniqueCategoryList.length; i++) {
        categoryListKey.push({ key: uniqueCategoryList[i] });
      }
      categoryListKey.push({ key: strings.logout });

      this.setState({
        sidemenu_data: [...this.state.sidemenu_data, ...categoryListKey],
        product_list: res,
      });
    } else if (statusCode === 401) {
      showToast(strings.not_authorized_user);
    } else if (statusCode === 422) {
      showToast(res.message);
    } else {
      showToast(strings.something_went_wrong);
    }
  };

  handleRowonAction = (item) => {
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
    switch (item.key) {
      case strings.home:
        this.props.navigation.navigate("Dashboard");
        break;
      case "men clothing":
        this.props.navigation.navigate("MensProducts", {
          product_list: this.state.product_list,
          filter: "men clothing",
        });
        break;
      case "jewelery":
        this.props.navigation.navigate("JweleyProducts", {
          product_list: this.state.product_list,
          filter: "jewelery",
        });
        break;
      case "electronics":
        this.props.navigation.navigate("ElectroincsProducts", {
          product_list: this.state.product_list,
          filter: "electronics",
        });
        break;
      case "women clothing":
        this.props.navigation.navigate("WomensProducts", {
          product_list: this.state.product_list,
          filter: "women clothing",
        });
        break;
      case strings.logout:
        logout(this.props);
    }
  };

  chooseImageForRow = (key) => {
    switch (key) {
      case strings.home:
        return (
          <Image
            source={Images.ic_home_sm}
            style={{ ...style.sidemenu_image }}
          />
        );
        break;
      case "men clothing":
        return (
          <Image
            source={Images.ic_contact_sm}
            style={{ ...style.sidemenu_image }}
          />
        );
        break;
      case "jewelery":
        return (
          <Image
            source={Images.ic_inquiry_sm}
            style={{ ...style.sidemenu_image }}
          />
        );
        break;
      case "electronics":
        return (
          <Image
            source={Images.ic_service_sm}
            style={{ ...style.sidemenu_image }}
          />
        );
        break;
      case "women clothing":
        return (
          <Image
            source={Images.ic_product_sm}
            style={{ ...style.sidemenu_image }}
          />
        );
        break;
      case strings.logout:
        return (
          <Image
            source={Images.ic_logout_sm}
            style={{ ...style.sidemenu_image }}
          />
        );
        break;
    }
  };

  renderHeaderView = () => {
    return (
      <View style={{ flexDirection: "row", marginBottom: Dimens.ms48 }}>
        <Image
          source={Images.ic_user_placeholder}
          style={{ ...style.profile_image }}
        />
        <View
          style={{
            flex: 1,
            marginLeft: Dimens.ms16,
            marginRight: Dimens.ms8,
            justifyContent: "center",
          }}
        >
          <Text numberOfLines={1} style={{ ...TypoGraphy.textSemiBold17 }}>
            Softices
          </Text>

          <Text
            numberOfLines={1}
            style={{
              marginTop: Dimens.ms4,
              ...TypoGraphy.textRegular14,
              color: Colors.colorPlaceholder,
            }}
          >
            hr@softices.com
          </Text>
        </View>
      </View>
    );
  };

  renderFooterView = () => {
    return (
      <View
        style={{
          alignItems: "flex-end",
          marginRight: Dimens.ms16,
          marginTop: Dimens.ms40,
        }}
      >
        <Image
          source={Images.ic_dzy_logo_sm}
          style={{ width: undefined, height: Dimens.ms20, aspectRatio: 4 }}
        />
      </View>
    );
  };

  renderSidemenuList() {
    return (
      <FlatList
        listKey={(item, index) => index.toString()}
        bounces={false}
        data={this.state.sidemenu_data}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => this.renderHeaderView()}
        contentContainerStyle={{}}
        keyExtractor={({ id }, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ marginHorizontal: Dimens.ms16 }}>
            <TouchableOpacity onPress={() => this.handleRowonAction(item)}>
              <View style={{ marginVertical: Dimens.ms8 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {this.chooseImageForRow(item.key)}
                  <Text style={{ ...TypoGraphy.textMedium14 }}>{item.key}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: "#f2f2f2",
                marginTop: Dimens.ms2,
                height: Dimens.ms1,
              }}
            />
          </View>
        )}
      />
    );
  }

  render() {
    return (
      <Container>
        <Image
          source={Images.pattern_sm}
          style={{
            top: 0,
            left: 0,
            height: undefined,
            aspectRatio: 1,
            width: "57%",
            position: "absolute",
          }}
        />
        <SafeAreaView
          forceInset={{ top: "always" }}
          style={{ flex: 1, backgroundColor: Colors.colorWhite }}
        >
          <View
            style={{
              flex: 1,
              marginBottom: Dimens.ms10,
              marginTop: Dimens.ms16,
            }}
          >
            {this.renderSidemenuList()}
          </View>
        </SafeAreaView>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { sessionReducer } = state;
  const { loginReducer } = state;

  return {
    token: sessionReducer,
    isLoggedIn: loginReducer,
  };
}

export default connect(mapStateToProps)(Sidemenu);
