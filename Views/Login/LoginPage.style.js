import 
{
    StyleSheet ,
    Dimensions,
    Platform
} from "react-native";

import * as Fonts from "../../Utilities/Constants/FontConstant";
// const GetHeight = Dimensions.get('window').height
const LoginStyle = StyleSheet.create(
    {
        scrollStyle : 
        {
            height : '100%',
            backgroundColor : 'red',
            flexDirection : 'column',
        },
        mainView : 
        {
            flex : 1,
            flexDirection : 'column',
        },
        titleView : 
        {
            justifyContent : 'center',
            flexDirection : 'row',
            alignItems : 'flex-end',
            marginTop : 100
        },
        titleText : 
        {
            color : 'white',
            fontFamily : Fonts.GOTHAM_BOLD,
            fontSize : 50
        },
        middleView : 
        {
            height : '50%',
            justifyContent : 'center',
            alignItems : 'center'
        },
        signinStyle : 
        {
            marginHorizontal : 30,
            marginTop : 30,
            backgroundColor :'white',
            borderRadius : 6,
            justifyContent : 'center',
            alignItems : 'center',
            height : 48
        },
        signinTextStyle : 
        {
            fontFamily : Fonts.GOTHAM_BOLD,
            fontSize : 25,
            color : 'red'
        },
        forgotPasswordStyle :
        {
            color : 'white',
            fontFamily : Fonts.GOTHAM_BOLD,
            fontWeight : 'normal',
            fontSize : 20,
            alignItems : 'center',
            marginTop : 30,
            marginHorizontal : 30
        },
        forgotTextStyle :
        {
            color : 'white',
            fontFamily : Fonts.GOTHAM_BOLD, 
            fontSize : 20,
            paddingTop :  10,
            paddingBottom : 10
        },

        registerStyle : 
        {

        },
        bottomView : 
        {
            marginLeft : 30,
            marginRight : 30,
            justifyContent : 'flex-end',
            position : 'absolute',
            bottom : 0
        }
    }
    )
    
    
    
    
    export default LoginStyle