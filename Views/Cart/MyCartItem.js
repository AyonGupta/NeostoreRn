import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { useEffect } from "react/cjs/react.development";
import MyCartItemStyle from "./MyCartItem.style";
import InputSpinner from "react-native-input-spinner";
import * as FontConstant from "../../Utilities/Constants/FontConstant";
const MyCartItem = (props) => {
  useEffect(() => {
  }, []);

  return (
    <View style={MyCartItemStyle.conatiner}>
      <Image
        style={MyCartItemStyle.imageview}
        source={{
          uri: props.image,
        }}
      />
      <View style={MyCartItemStyle.rightView}>
        <Text style={MyCartItemStyle.title}>{props.name}</Text>
        <Text style={MyCartItemStyle.subtitle}> ({props.category})</Text>
        <View style={MyCartItemStyle.bottomView}>
          <View style={MyCartItemStyle.stepperView}>
            <InputSpinner
              max={10}
              min={0}
              step={1}
              skin="clean"
              value={props.quantity}
              onChange={(num) => {props.OnChangeQuantity(props.productId, num)}}
              fontFamily={FontConstant.GOTHAM_BOLD}
              shadow={false}
            />
          </View>
          <View style={MyCartItemStyle.priceview}>
            <Text style={MyCartItemStyle.price}> Rs. {props.cost} </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default MyCartItem;
