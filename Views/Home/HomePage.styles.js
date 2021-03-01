import 
{
    StatusBar,
    StyleSheet
} from "react-native";
import * as Color from "../../Utilities/Constants/ColorConstant";
const HomePageStyles = StyleSheet.create (
    {
        mainPage : 
        {
            height : '100%',
            backgroundColor : Color.WHITE,
        },
        carouselView : 
        {
            flex : 0.3,
            backgroundColor : 'yellow',
            justifyContent : 'center',
            alignItems : 'center'
        },
        menuOptionView : 
        {
            flex : 1,
            flexWrap : 'wrap',
            flexDirection : 'row',
            justifyContent  : 'center',
            alignSelf : 'center'
        },
        menuItems :
        {
            height : '45%',
            width : '45%',
            margin : 5,
            borderRadius : 5,
            overflow : 'hidden',
            backgroundColor : Color.APP_BG
        },
        menuIcons : 
        {
            resizeMode : 'contain', 
            height : '100%', 
            width : '100%'
        }
    })
    export default HomePageStyles