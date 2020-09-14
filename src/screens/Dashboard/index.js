import NetInfo from "@react-native-community/netinfo";
import { Root, Text, View } from "native-base";
import React, { Component } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { DrawerActions } from "react-navigation-drawer";
import { connect } from "react-redux";
import { Colors, Dimens, Images, TypoGraphy } from "../../config";
import strings from "../../lang/strings";
import { requestForProductList } from "../../webServices/productListingService";
import CategoryListItem from "./categoryListItem";
import style from "./style";
import ShadowView from "react-native-simple-shadow-view";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_text: "",
      product_list: [],
      category_list: [
        {
          name: strings.contacts,
          image: Images.ic_contact_sm,
          isSelected: false,
        },
        {
          name: strings.inquiries,
          image: Images.ic_inquiry_sm,
          isSelected: false,
        },
        {
          name: strings.services,
          image: Images.ic_service_sm,
          isSelected: false,
        },
        {
          name: strings.products,
          image: Images.ic_product_sm,
          isSelected: false,
        },
        {
          name: strings.photos,
          image: Images.ic_photo_sm,
          isSelected: false,
        },
        {
          name: strings.videos,
          image: Images.ic_video_sm,
          isSelected: false,
        },
        {
          name: strings.locations,
          image: Images.ic_location_sm,
          isSelected: false,
        },
        {
          name: strings.reviews,
          image: Images.ic_review_sm,
          isSelected: false,
        },
      ],
    };
  }

  componentDidMount() {
    this.checkInternetAndRequestData();
  }

  checkInternetAndRequestData() {
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        this.callForProductList();
      } else {
        showToast(strings.no_internet_connection);
      }
    });
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
        this.parsePaymentOffersListResponse(statusCode, responseJson);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isProgress: false });
        showToast(strings.something_went_wrong);
      });
  }

  parsePaymentOffersListResponse = (statusCode, res) => {
    if (statusCode === 200 || statusCode === 201) {
      this.setState({
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

  renderSearchView() {
    return (
      <View style={{ ...style.search_container }}>
        <Image source={Images.search} style={{ ...style.search_image }} />
        <TextInput
          ref={(input) => {
            this.mobileInput = input;
          }}
          placeholder={strings.search}
          returnKeyType={"done"}
          placeholderTextColor={Colors.colorPlaceholder}
          editable={true}
          numberOfLines={1}
          value={this.state.search_text}
          onChangeText={(text) => this.setState({ search_text: text })}
          style={{ ...style.search_textInput }}
        />
      </View>
    );
  }

  renderProductTypeList() {
    return (
      <FlatList
        listKey={(item, index) => "B" + index.toString()}
        keyExtractor={(item, index) => index.toString()}
        bounces={false}
        contentContainerStyle={{
          marginHorizontal: Dimens.ms12,
          marginTop: Dimens.ms20,
        }}
        data={this.state.product_list}
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

  renderCategoryList() {
    return (
      <View>
        <FlatList
          listKey={(item, index) => index.toString()}
          bounces={false}
          data={this.state.category_list}
          numColumns={1}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: Dimens.ms24,
            marginHorizontal: Dimens.ms8,
          }}
          keyExtractor={({ id }, index) => index}
          renderItem={({ item, index }) => (
            <CategoryListItem row={item} itemIndex={index} props={this.props} />
          )}
        />
      </View>
    );
  }

  openDrawer() {
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  }

  render() {
    console.log(this.props.token);
    return (
      <Root>
        <StatusBar />
        <View
          style={{
            justifyContent: "flex-end",
          }}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[Colors.colorGradientStart, Colors.colorGradientEnd]}
            style={{}}
          >
            <TouchableOpacity onPress={() => this.openDrawer()}>
              <Image
                source={Images.ic_menu_white}
                style={{
                  height: Dimens.ms24,
                  width: Dimens.ms24,
                  marginLeft: Dimens.ms16,
                  marginTop: Dimens.ms50,
                }}
              />
            </TouchableOpacity>
            <Text style={{ ...style.dashboard_text }}>{strings.home}</Text>
          </LinearGradient>
        </View>
        <ScrollView
          style={{ backgroundColor: Colors.colorWhite }}
          showsVerticalScrollIndicator={false}
        >
          {this.renderCategoryList()}
          {this.renderProductTypeList()}
        </ScrollView>
      </Root>
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

export default connect(mapStateToProps)(Dashboard);
