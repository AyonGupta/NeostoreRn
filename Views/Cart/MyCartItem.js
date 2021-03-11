import React from "react";
import { View, Image, Text } from "react-native";
import { useEffect } from "react/cjs/react.development";
import MyCartItemStyle from "./MyCartItem.style"


const MyCartItem = (props) => {
  useEffect (()=> {
  }, [])

  return (
    <View style={MyCartItemStyle.conatiner}>
      <Image 
      style={MyCartItemStyle.imageview} 
      source = {
        {
          uri : props.image
        }
      }/>
      <View style={MyCartItemStyle.rightView}>
        <Text style = {MyCartItemStyle.title}>{props.name}</Text>
        <Text style = {MyCartItemStyle.subtitle}> ({props.category})</Text>
        <View 
        style = {MyCartItemStyle.bottomView}
        >
        </View>
      </View>
    </View>
  );
};
export default MyCartItem;
