import
{
    View,
    Text,
    ScrollView ,
    Pressable,
    Button
} from "react-native";
import React, {useState} from "react";
import LoginStyle from "../Login/LoginPage.style";
import * as Strings from "../../Utilities/Constants/StringConstant";
import Entry from "../../Views/SubViews/Entry/Entry";
import * as ImgConstant from "../../Utilities/Constants/ImageConstant";

const LoginPage = () => 
{
    const [userEmail, SetUserEmail] = useState ('')
    const [userPassword, SetUserPassword] = useState ('')
    
    const OnPressLogin = () => 
    {
        console.log (userEmail)
        console.log (userPassword)
    }
    const OnPressForgotPassword = () => 
    {
       console.log ('Shame that you forgot your password!!')
    }

    return (
        <ScrollView 
        style = {LoginStyle.scrollStyle}
        bounces = {false}
        >
        <View 
        style = {LoginStyle.titleView}> 
        <Text 
        style= {LoginStyle.titleText}> {Strings.LP_NEOSTORE}</Text>
        </View>
        <View style = {{height : 60}}/>
        
        <Entry 
        placeholder = {Strings.LP_PLACEHOLDER_EMAIL}
        OnTextChange = {(txtEmail) => {
            SetUserEmail (txtEmail)
        }}
        icon = {ImgConstant.LP_IMG_EMAIL}
        />
        <View style = {{height : 20}}/>
        <Entry 
        placeholder = {Strings.LP_PLACEHOLDER_PASSWORD}
        OnTextChange = {(txtPassword) => {
            SetUserPassword (txtPassword)
        }}
        icon = {ImgConstant.LP_IMG_PASSWORD}
        isPassword = {true}
        />
        
        <Pressable 
        style = {LoginStyle.signinStyle}
        onPress = {OnPressLogin}>
        <Text 
        style = {LoginStyle.signinTextStyle}>
        {Strings.LP_LOGIN}
        </Text>
        </Pressable>

        {/* <Button
        onPress = {OnPressForgotPassword}
        title = {Strings.LP_FORGOT}
        style = {LoginStyle.forgotTextStyle}
        color = 'white'
        /> */}
        <Pressable
        onPress = {OnPressForgotPassword}>
        <Text style = {LoginStyle.forgotTextStyle}>{Strings.LP_FORGOT}</Text>
        </Pressable>
        </ScrollView>
        );
    }
    export default LoginPage