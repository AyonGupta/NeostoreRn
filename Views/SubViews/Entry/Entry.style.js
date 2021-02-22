import 
{
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
            height : 44,
            marginLeft : 30,
            marginRight : 30
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