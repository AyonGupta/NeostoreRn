import { Dimensions, Platform, StyleSheet } from "react-native";
import * as ColorConstant from "../../Utilities/Constants/ColorConstant";
import * as FontConstant from "../../Utilities/Constants/FontConstant";

const Height  = Dimensions.get('window').height
const Width  = Dimensions.get('window').width
const Plat = Platform.OS
const ProductDetailPageStyle = StyleSheet.create(
    {
        headerLeft : 
        {
            width : 64, 
            height : '100%',
            justifyContent : 'center', 
            alignItems : 'center'
        },
        scrollView :
        {
            // height : Height - 200,
        },
        scrollContent :
        { 
            flexGrow: 0.95 , 
            justifyContent: 'space-evenly', 
            flexDirection: 'column' ,
        },
        topview :
        {
            backgroundColor : ColorConstant.WHITE,
            padding : 10
        },
        title : 
        {
            fontFamily : FontConstant.GOTHAM_BOLD,
            fontSize : 25
        },
        category : 
        {
            fontFamily : FontConstant.GOTHAM_BOLD,
            fontSize : 15,
            color : ColorConstant.L_GREY,
            marginTop : 5
        },
        producerRatingView :
        {
            flex : 1,
            marginTop : 5,
            flexDirection : 'row',
        },
        producerView : 
        {
            flex : 0.7,
            marginRight : 10,
            backgroundColor : 'white',
            justifyContent : 'center',
        },
        ratingView : 
        {
            flex : 0.3,
            backgroundColor : 'white',
            justifyContent : 'center',
            alignItems : 'flex-end',
            flexDirection : 'row',
        },
        producerName : 
        {
            fontFamily : FontConstant.GOTHAM_BOLD,
            fontSize : 13,
            color : ColorConstant.L_GREY,
            marginTop : 0
        },
        ratingStar :
        {
            height : 20,
            width : 20,
            resizeMode : 'contain'
        },

        bottomView :
        {
            // position : 'absolute',
            // bottom : 84,
            padding : 10,
            height : 84,
            flexDirection : 'row',
            backgroundColor : ColorConstant.WHITE
        },
        buyView :
        {
            backgroundColor : ColorConstant.APP_BG,
            borderRadius : 5,
            flex : 0.5,
            marginRight : 10,
            height : 64,
            justifyContent : 'center',
            alignItems : 'center'
        },
        rateView :
        {
            backgroundColor : ColorConstant.L_GREY,
            borderRadius : 5,
            flex : 0.5,
            justifyContent : 'center',
            alignItems : 'center',
        },
        buyText : 
        {
            fontSize : 20,
            fontFamily : FontConstant.GOTHAM_BOLD,
            color : ColorConstant.WHITE
        },
        rateText : 
        {
            fontSize : 20,
            fontFamily : FontConstant.GOTHAM_BOLD,
            color : ColorConstant.GREY,
        },
        middleView :
        {
            backgroundColor : 'white', 
            borderRadius : 5, 
            margin : 20, 
            flex : 1,
            overflow : 'hidden',
            flexGrow : 1,
            
        },
        priceShareView :
        {
            flex : 0.02,
            marginHorizontal : 20,
            marginTop : 10,
            flexDirection : 'row',
            justifyContent : 'center', 
            alignItems : 'center',      
        },
        price : 
        {
            fontFamily : FontConstant.GOTHAM_BOLD,
            fontSize : 25,
            color : ColorConstant.APP_BG,
            flex : 1          
        },
        share : 
        {
            height : 30,
            width : 30,
            alignItems : 'flex-end'
        },
        bannerImage : 
        {
            marginHorizontal : 20,
            marginVertical : 10,
            width : '80%',
            height : '40%',
            resizeMode : 'contain'
        },
        flatList : 
        {
            flex : 0.4,
            flexGrow : 0,
        },
        imgs : 
        {
            borderWidth : 2,
            width : Width * 0.2,
            height : Width * 0.15,
            borderColor : ColorConstant.APP_BG,
            marginHorizontal : 10
        },
        redborder : 
        {
            borderColor : ColorConstant.APP_BG
        },
        greyborder : 
        {
            borderColor : ColorConstant.L_GREY

        },
        divider : 
        {
            width : '100%',
            height : 2,
            marginVertical : 15,
            backgroundColor : ColorConstant.L_GREY,
            opacity : 0.5
        },
        desc :
        {
            color : ColorConstant.BLACK,
            fontFamily : FontConstant.GOTHAM_BOLD,
            fontSize : 20,
            marginTop : 10,
            marginLeft : 20,
        },
        descText : 
        {
            color : ColorConstant.BLACK,
            fontFamily : FontConstant.GOTHAM_BOLD,
            fontSize : 14,
            marginHorizontal : 20,
            marginVertical : 10
        }
        
    })
    export default ProductDetailPageStyle