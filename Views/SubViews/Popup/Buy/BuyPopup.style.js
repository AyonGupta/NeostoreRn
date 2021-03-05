import { StyleSheet, Dimensions } from "react-native";



import  * as ColorConstant from "../../../../Utilities/Constants/ColorConstant"
import  * as FontConstant from "../../../../Utilities/Constants/FontConstant";

const Dimen = Dimensions.get ('window')
const BuyPopupStyle = StyleSheet.create (
    {
        blurBg :
        {
            backgroundColor : 'black',
            opacity : 0.5,
            height : '100%',
            width : '100%',
            position :'absolute'
        },
        bg : 
        {
            justifyContent : 'center',
            alignItems : 'center',
            overflow : 'hidden',
            flex : 1
        },
        container :
        {
            height : Dimen.height * 0.8,
            width : Dimen.width * 0.9,
            borderRadius : 6,
            backgroundColor : ColorConstant.WHITE,
            alignItems : 'center',
            justifyContent : 'center'
        },
        title : 
        {
            fontFamily : FontConstant.GOTHAM_BOLD,
            fontSize : 25,
            marginHorizontal : 20, 
            
        },
        imageborder : 
        {
            margin : 20,
            borderColor : ColorConstant.L_GREY,
            borderWidth : 1,
            height : '50%',
            width : '80%',
            padding : 10

        },
        image : 
        {
            flex : 1,
            resizeMode : 'contain'
        },
        enterQty : 
        {
            fontSize : 15,
            fontFamily : FontConstant.GOTHAM_BOLD,
            color : ColorConstant.L_GREY
        },
        qtyBorder : 
        {
            borderWidth : 1,
            borderColor : ColorConstant.L_GREY,
            height : 40,
            width : 100,
            margin : 10
        },
        qty :
        {
            fontSize : 20,
            fontFamily : FontConstant.GOTHAM_BOLD,
            flex : 1,
            textAlign : 'center',
            padding : 5
        },
        buyView : 
        {
            marginHorizontal : 30,
            marginVertical : 20,
            width : '60%',
            height : '10%',
            backgroundColor : ColorConstant.APP_BG,
            justifyContent : 'center',
            alignItems : 'center',
            borderRadius : 6
        },
        buynowText :
        {
            fontFamily : FontConstant.GOTHAM_BOLD,
            fontSize : 20,
            color : ColorConstant.WHITE
        },
        container1: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            flex: 1,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          },
          modalContainer: {
            height: Dimensions.get('window').height * .3,
            width: Dimensions.get('window').width,
          }

    })

    export default BuyPopupStyle