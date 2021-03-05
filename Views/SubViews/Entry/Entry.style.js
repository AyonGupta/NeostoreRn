import 
{
    Platform,
    StyleSheet
} from "react-native";
import * as Fonts from "../../../Utilities/Constants/FontConstant";
const EntryStyle = StyleSheet.create (
    {
        container : 
        {
            borderColor : 'white',
            borderWidth : 1,
            backgroundColor : 'transparent',
            flex : 1,
            flexDirection : 'row',
            marginHorizontal : 30,
            paddingTop : Platform.OS == 'ios' ? 10 : -10,
            paddingBottom : Platform.OS == 'ios' ? 10 : -10,
        }, 
        LeftIcon : 
        {
            flex : 0.1,
            alignSelf : 'center',
            marginLeft : 5,
            resizeMode : 'contain'
        } ,
        rightView : 
        {
            flex : 0.9,
            margin : 5,
            color : 'white',
            fontFamily : Fonts.GOTHAM_BOLD,
            fontSize : 20
        }
    })
    
    export default EntryStyle