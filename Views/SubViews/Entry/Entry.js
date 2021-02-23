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
    const keyboardType = (typeKey) => 
    {
        switch (typeKey) 
        {
            case 1 : 
            return "email-address"
            case 2 : 
            return "number-pad"
            default : 
            return "default"
        }
    }
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
            keyboardType = {keyboardType(props.keyboardType)}
            />
        </View>
    )
}

export default Entry