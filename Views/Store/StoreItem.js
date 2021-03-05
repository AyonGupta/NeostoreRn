import React from "react"
import 
{
    View,
    Text,
    Image,
} from "react-native"
import StoreItemStyle from "./StoreItem.style";
const StoreItem = (props) => {
    return (
        <View
        style = {StoreItemStyle.container}>
        <Image
        style = {StoreItemStyle.image}
        source = {
            require ('../../Assets/Images/ic_location_pin.png')
        }/>
        <View>
        <Text style = {StoreItemStyle.title}>{props.title}</Text>
        <Text style = {StoreItemStyle.subtitle}> {props.subtitle}</Text>
        </View>
        <View style = {StoreItemStyle.bottomLine}></View>
        </View>
        )
    }
    export default StoreItem
    