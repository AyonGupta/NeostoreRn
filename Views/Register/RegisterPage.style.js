import 
{
    StyleSheet
} from "react-native";

import * as Fonts from "../../Utilities/Constants/FontConstant";

const RegisterStyle = StyleSheet.create(
    {
        safeArea : 
        {
            backgroundColor : 'red'
        },
        scrollView :
        {
            backgroundColor : 'red',
            height : '100%'
        },
        scrollContent : 
        {
            paddingBottom : 30
        },
        neostore :
        {
            marginTop : 44, 
            textAlign : 'center', 
            fontFamily : 'Gotham-Bold', 
            color : 'white', 
            fontSize : 40
        },
        gender :
        {
            marginLeft : 30, 
            marginRight : 30, 
            marginTop : -10, 
            height : 44, 
            flexDirection : 'row', 
            alignItems : 'center'
        },
        terms : 
        {
            marginLeft : 30,
            marginRight : 30, 
            height : 44, 
            flexDirection : 'row', 
            justifyContent : 'center', 
            alignItems : 'center'
        },
        checkbox : 
        {
            height : 20, 
            width : 20
        },
        termsText :
        {
            fontFamily : 'Gotham-Bold', 
            fontSize : 18, 
            color : 'white'
        },
        termsText2 :
        {
            fontFamily : 'Gotham-Bold', 
            fontSize : 18, 
            color : 'white'
        },
        underline :
        {
            height : 2, 
            backgroundColor : 'white'
        },
        termsHorizonatl :
        {
            flexDirection : 'column'
        },
        register :
        {
            marginLeft : 30, 
            marginRight : 30, 
            backgroundColor : 'white',
            borderRadius : 5, 
            height : 54, 
            justifyContent : 'center', 
            alignItems : 'center'
        },
        regText :
        {
            color : 'red', 
            fontFamily : 'Gotham-Bold', 
            fontSize : 25
        }
    }
)
export default RegisterStyle