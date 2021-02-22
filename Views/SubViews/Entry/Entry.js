import 
{
    View,
    TextInput,
    Image
} from "react-native"
import React from "react";
import EntryStyle from "./Entry.style";

const Entry = (props) => 
{
    return (
        <View 
        style = {EntryStyle.container}>
            <Image 
            source = {props.icon}
            style = {EntryStyle.LeftIcon}/>
            <TextInput
            style = {EntryStyle.rightView}
            onChangeText = {props.OnTextChange}
            placeholder = {props.placeholder}
            placeholderTextColor = 'white'
            secureTextEntry = {props.isPassword}
            />
        </View>
    )
}

export default Entry