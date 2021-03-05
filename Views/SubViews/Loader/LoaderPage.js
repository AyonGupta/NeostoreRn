import React from "react"
import LoaderPageStyle from "./LoaderPage.style";
import 
{
    View,
    Modal,
    ActivityIndicator
} from "react-native"
import * as ColorConstant from "../../../Utilities/Constants/ColorConstant";
const LoaderPage = (props) => 
{
    return (
        <Modal
        transparent = {true}
        visible = {props.visible}
        animationType = 'fade'
        style = {LoaderPageStyle.modal}
        >
        <View
        style = {LoaderPageStyle.blurbg}/>
        
        <View 
        style = {LoaderPageStyle.bg}>
        <View
        style = {LoaderPageStyle.loaderContainer}
        >
        <ActivityIndicator 
        size="large" 
        color={ColorConstant.APP_BG} 
        />
        
        </View>
        </View>
        </Modal>
        )
    }
    
    export default LoaderPage