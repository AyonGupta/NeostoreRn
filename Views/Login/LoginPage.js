import
{
    View,
    Text,
    ScrollView ,
    SafeAreaView
} from "react-native";
import React from "react";
import LoginStyle from "../Login/LoginPage.style";
const LoginPage = () => 
{
    return (
        <ScrollView 
        style = {LoginStyle.scrollStyle}
        >
        <SafeAreaView>
        <View 
        style = {LoginStyle.mainView}> 
        <Text 
        style= {LoginStyle.titleText}>Hello world</Text>
        </View>
        </SafeAreaView>
        </ScrollView>
        );
    }
    export default LoginPage