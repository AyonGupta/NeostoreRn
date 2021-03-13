import { StyleSheet } from "react-native";
import * as FontConstant from "../../Utilities/Constants/FontConstant"
import * as ColorConstant from "../../Utilities/Constants/ColorConstant"

const MyCartItemStyle = StyleSheet.create ({
    conatiner : 
    {
        flex : 1, 
        flexDirection : 'row',
        backgroundColor : ColorConstant.WHITE
    },
    imageview :
    {
        flex : 0.3,
        margin : 20,
        height : 100,
        width : 140,
    },
    rightView :
    {
        flex : 0.8, 
        margin : 5,
        flexDirection : 'column',
    },
    title :
    {
        fontFamily : FontConstant.GOTHAM_BOLD,
        fontSize : 20,
        marginTop : 20
    },
    subtitle :
    {
        fontFamily : FontConstant.GOTHAM_BOLD,
        fontSize : 18,
        marginTop : 5,
        color : ColorConstant.GREY
    },
    bottomView :
    {
        marginTop : 5,
        marginBottom : 15,
        paddingVertical : 5,
        width : '100%',
        flexDirection : 'row',
        alignItems : 'center', 
    },
    stepperView : 
    {
        flex : 0.5
    },
    priceview : 
    {
        flex : 0.5,
        alignItems : 'flex-end',
        justifyContent : 'center',
        marginRight : 20
    },
    price :
    {
        fontFamily : FontConstant.GOTHAM_BOLD,
        fontSize : 20,
        color : ColorConstant.GREY,
        
    }
})
export default MyCartItemStyle