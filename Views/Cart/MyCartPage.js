import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { SwipeListView, SwipeRow } from "react-native-swipe-list-view";
import { useDispatch, useSelector } from "react-redux";
import LoaderPage from "../SubViews/Loader/LoaderPage";
import MyCartViewModel from "../../ViewModel/MyCart/MyCartViewModel";
import MyCartPageStyle from "./MyCartPage.style";
import * as ImageConstant from "../../Utilities/Constants/ImageConstant";
import MyCartItem from "./MyCartItem";
const MyCartPage = () => {
  //1. All cart items
  const CartData = useSelector((state) => state.myCartReducer.CartData.data);

  //2. Edit Cart data
  const EditCartData = useSelector((state) => state.myCartReducer.EditCartData);

  //3. Delete Cart Data
  const DeleteCartData = useSelector(
    (state) => state.myCartReducer.DeleteCartData
  );

  //4. Error data
  const ErrorData = useSelector((state) => state.myCartReducer.errorData);

  //5. Loader
  const isLoader = useSelector((state) => state.myCartReducer.isLoader);

  //6. Dispatch
  const dispatch = useDispatch();

  //7. Total Cost
  const [TotalAmount, SetTotalAmount] = useState(0);

  useEffect(() => {
    dispatch(MyCartViewModel.GetItems());
  }, []);

  useEffect(() => {
    if (CartData != undefined) {
      // console.log ('total cost = ', CartData.reduce((a,b) => a.product.cost + b.product.cost, 0))
      let total = 0;
      CartData.map((Obj) => (total = Obj.product.cost + total));
      SetTotalAmount(total);
    }
  }, [CartData]);
  useEffect(() => {}, [ErrorData]);

  const OnClickDelete = (id) => {
    console.log(id);
  };

  const renderItem = (data) => (
    <SwipeRow
      disableLeftSwipe={false}
      disableRightSwipe={true}
      leftOpenValue={20 + Math.random() * 150}
      rightOpenValue={-100}
    >
      <TouchableOpacity
        style={MyCartPageStyle.rowBack}
        onPress={() => OnClickDelete(data)}
      >
        <Image
          style={MyCartPageStyle.rightSwipeDeleteView}
          source={ImageConstant.CART_DELETE}
        />
      </TouchableOpacity>

      <MyCartItem
        name={data.item.product.name}
        image={data.item.product.product_images}
        category={data.item.product.product_category}
        quantity={data.item.quantity}
        cost={data.item.product.cost}
      />
    </SwipeRow>
  );

  return (
    <View>
      <LoaderPage visible={isLoader} />
      <SwipeListView
        style={MyCartPageStyle.flatList}
        data={CartData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => {
          return <View style={{ height: 0.5, backgroundColor: "grey" }}></View>;
        }}
        ListFooterComponent={() => {
          return (
            <View style = {{marginTop : 20}}>
              <View style={MyCartPageStyle.separator}></View>
              <View style={MyCartPageStyle.totalview}>
                <Text style={MyCartPageStyle.total}> TOTAL </Text>
                <View style={MyCartPageStyle.priceView}>
                  <Text style={MyCartPageStyle.pricetext}>
                    Rs {TotalAmount}
                  </Text>
                </View>
              </View>
              <View style={MyCartPageStyle.separator}></View>

              <View
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity style={MyCartPageStyle.orderView}>
                  <Text style={MyCartPageStyle.ordertext}>Order</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        contentContainerStyle={{ paddingBottom: 180 }}
      />
    </View>
  );
};

export default MyCartPage;
