import React from "react"
import 
{
    View,
    Image,
    Text,
    Dimensions
} from "react-native"
import { useSelector } from "react-redux"
import * as Colors from "../../Utilities/Constants/ColorConstant";
const DrawerHeader = () => 
{
    const UserData = useSelector(state => state.loginReducer.UserData)
    const window = Dimensions.get('window')
    const profilePicHeight  = (window.height*0.2) * 0.65
    return(//Colors.MENU_BG
        <View style = {{alignItems : 'center', overflow : 'hidden', padding : 30}}>
             <Image 
             style = {{ height : profilePicHeight, width : profilePicHeight, borderRadius : profilePicHeight * 0.5, borderWidth : 5, borderColor :'white'}}/>
             <Text style = {{color : 'white', fontFamily : 'Gotham-Bold', fontSize : 20, marginTop : 20}}> Ayon Gupta</Text>
             <Text style = {{color : 'white', fontFamily : 'Gotham-Bold', fontSize : 15}} > ayon.gupta@neosoftmail.com </Text>
        </View>
    )
}
export default DrawerHeader