import React from "react";
import 
{
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image
} from "react-native";

import HomeStyle from "./HomePage.styles";
import * as ImageConstant from "../../Utilities/Constants/ImageConstant";
const HomePage = () => 
{
    return (
        <SafeAreaView style = {{backgroundColor : 'red'}}>
        <View style = {HomeStyle.mainPage}>
        <View style = {HomeStyle.carouselView}>
        </View>
        <View
        style = {{ flex : 0.6, marginTop : 10}}>
        <View style = {[HomeStyle.menuOptionView]}>
        <TouchableOpacity 
        style = {HomeStyle.menuItems}
        >
        {/* <Image 
        source = 
        {
            ImageConstant.HOME_IMG_TABLE
        } 
        style = {HomeStyle.menuIcons}
        >
        </Image> */}
        </TouchableOpacity>
        <TouchableOpacity 
        style = {HomeStyle.menuItems}
        >
        {/* <Image 
        source = 
        {
            ImageConstant.HOME_IMG_TABLE
        } 
        style = {HomeStyle.menuIcons}
        ></Image> */}
        </TouchableOpacity>
        <TouchableOpacity 
        style = {HomeStyle.menuItems}>
            {/* <Image 
        source = 
        {
            ImageConstant.HOME_IMG_TABLE
        } 
        style = {HomeStyle.menuIcons}
        ></Image> */}
        </TouchableOpacity>
        <TouchableOpacity 
        style = {HomeStyle.menuItems}>
            {/* <Image 
        source = 
        {
            ImageConstant.HOME_IMG_TABLE
        } 
        style = {HomeStyle.menuIcons}
        ></Image> */}
        </TouchableOpacity>
        </View>
        </View>
        </View>
        </SafeAreaView>
        
        )
    }
    export default HomePage