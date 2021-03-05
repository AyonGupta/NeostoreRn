import { Dimensions, StyleSheet } from "react-native"
import * as ColorConstant from "../../Utilities/Constants/ColorConstant"
import * as Font from "../../Utilities/Constants/FontConstant"

const Width = Dimensions.get('window').width
const ProductItemStyle = StyleSheet.create (
    {
        container :
        {
            flex : 1,
            flexDirection : 'row',
            width : '100%'
        },
        image : 
        {
            height : 100, 
            width : 100,
            margin : 10,
            resizeMode : 'contain'
        },
        title : 
        {
            marginHorizontal : 5,
            marginTop : 15,
            fontFamily : Font.GOTHAM_BOLD,
            fontSize : 20,
            color : ColorConstant.GREY
        },
        subtitle : 
        {
            marginHorizontal : 5,
            fontFamily : Font.GOTHAM_BOLD,
            fontSize : 15,
            color  : ColorConstant.L_GREY
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
        pricerating :
        {
            flex : 1,
            flexDirection : 'row',
            margin : 5,
            width : Width - 120,
            alignItems : 'center'
        },
        price :
        {
            fontSize : 25,
            flex : 0.5,
            color : ColorConstant.APP_BG,
            fontFamily : Font.GOTHAM_BOLD,
        },
        ratingView : 
        {
            flex : 0.5, 
            justifyContent : 'center',
            alignItems : 'flex-end',
            flexDirection : 'row'
        },
        ratingStar :
        {
            height : 20,
            width : 20,
            resizeMode : 'contain'
        }
    })
    export default ProductItemStyle