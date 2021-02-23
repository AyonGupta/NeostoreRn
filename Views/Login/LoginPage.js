import
{
    View,
    Text,
    ScrollView ,
    TouchableOpacity,
    Alert
} from "react-native";
import React, {useEffect, useState} from "react";
import LoginStyle from "../Login/LoginPage.style";
import * as Strings from "../../Utilities/Constants/StringConstant";
import Entry from "../../Views/SubViews/Entry/Entry";
import * as ImgConstant from "../../Utilities/Constants/ImageConstant";
import LoginViewModel from "../../ViewModel/Login/LoginViewModel";
import { useDispatch, useSelector } from "react-redux";
import { PerformLogin } from "../../Redux/Action/LoginAction";
const LoginPage = (props) => 
{
    const [userEmail, SetUserEmail] = useState ('')
    const [userPassword, SetUserPassword] = useState ('')
    let dispatch = useDispatch()
    let UserData = useSelector (state => state.loginReducer.UserData)

    /**
     * Called on click of login
     */
    const OnPressLogin = () => 
    {
        console.log (userEmail)
        console.log (userPassword)
        if (!LoginViewModel.ValidateEmail(userEmail)) 
        {
            Alert.alert (Strings.LP_NEOSTORE, Strings.ER_EMAIL)
            return
        }

        if (!LoginViewModel.ValidatePassword(userPassword)) 
        {
            Alert.alert (Strings.LP_NEOSTORE, Strings.ER_PASSWORD)
            return
        }

        dispatch(PerformLogin (userEmail, userPassword))

    }

    /**
     * Called on click of forgot password
     */
    const OnPressForgotPassword = () => 
    {
        console.log ('Shame that you forgot your password!!')
    }

    /**
     * Called on click of register
     */
    const OnPressRegister = () => 
    {
        props.navigation.navigate ("Register")
    }

    useEffect(()=> 
    {
        if (UserData.status != undefined) 
        {}
    }, [])
    return (
        <ScrollView 
        style = {LoginStyle.scrollStyle}
        bounces = {false}
        >
        <View style = {LoginStyle.mainView}>
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
        keyboardType = {1}
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
        
        <TouchableOpacity 
        style = {LoginStyle.signinStyle}
        onPress = {OnPressLogin}>
        <Text 
        style = {LoginStyle.signinTextStyle}>
        {Strings.LP_LOGIN}
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress = {OnPressForgotPassword}>
        <Text style = {LoginStyle.forgotTextStyle}>{Strings.LP_FORGOT}</Text>
        </TouchableOpacity>

        <View style = {{height : 20}}></View>
        <TouchableOpacity
        onPress = {OnPressRegister}>
        <Text style = {LoginStyle.forgotTextStyle}>{Strings.LP_REGISTER}</Text>
        </TouchableOpacity>

        </View>
        </ScrollView>
        );
    }
    export default LoginPage
