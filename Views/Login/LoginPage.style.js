import 
{
    StyleSheet ,
    Dimensions
} from "react-native";

import * as Fonts from "../../Utilities/Constants/FontConstant";
// const GetHeight = Dimensions.get('window').height
const LoginStyle = StyleSheet.create(
    {
        scrollStyle : 
        {
            height : '100%',
            backgroundColor : 'red',
            flexDirection : 'column'
        },
        titleView : 
        {
            height : '50%',
            marginTop : 64,
            justifyContent : 'center',
            flexDirection : 'row',
            alignItems : 'flex-end'
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
            margin : 30,
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
            alignSelf : 'center'
        },
        forgotTextStyle :
        {
            color : 'white',
            alignSelf : 'center', 
            fontFamily : Fonts.GOTHAM_BOLD, 
            fontSize : 20,
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