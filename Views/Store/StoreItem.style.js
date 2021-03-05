import { Dimensions, StyleSheet } from "react-native"
import * as ColorConstant from "../../Utilities/Constants/ColorConstant"
import * as Font from "../../Utilities/Constants/FontConstant"

const StoreItemStyle = StyleSheet.create (
    {
        container :
        {
            flex : 1,
            flexDirection : 'row',
            width : '100%'
        },
        image : 
        {
            height : 50, 
            width : 50,
            margin : 10,
            resizeMode : 'contain',
        },
        title : 
        {
            marginHorizontal : 5,
            marginTop : 10,
            fontFamily : Font.GOTHAM_BOLD,
            fontSize : 20,
            color : ColorConstant.GREY
        },
        subtitle : 
        {
            fontFamily : Font.GOTHAM_BOLD,
            fontSize : 15,
            color  : ColorConstant.L_GREY,
            flexShrink : 1
        },
        bottomLine : 
        {
            backgroundColor : ColorConstant.L_GREY,
            height : 2,
            width : '100%', 
            position : 'absolute', 
            bottom : 0,
            opacity : 0.5
        },
    })
    export default StoreItemStyle