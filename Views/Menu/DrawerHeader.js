import React, { useEffect, useState } from "react"
import 
{
    View,
    Image,
    Text,
    Dimensions
} from "react-native"
import { useSelector } from "react-redux"
import * as Colors from "../../Utilities/Constants/ColorConstant"

const DrawerHeader = () => 
{
    const AccountData = useSelector (state => state.myAccountReducer.UserData)
    const window = Dimensions.get('window')
    const profilePicHeight  = (window.height*0.2) * 0.65
    
    const [Email,SetEmail] = useState ('')
    const [Name,SetName] = useState ('')
    const [Img,SetImg] = useState ('')

    useEffect (()=> 
    {
        if (AccountData.data != undefined) 
        {
            SetEmail (AccountData.data.user_data.email)
            SetName (AccountData.data.user_data.first_name + ' ' + AccountData.data.user_data.last_name)
            SetImg (AccountData.data.user_data.profile_pic)
        }
    }, [AccountData])

    /*
    source = 
             {
                 {
                     uri : Img
                 }
             }
    */
    return(//Colors.MENU_BG
        <View style = {{alignItems : 'center', overflow : 'hidden', padding : 30}}>
             <Image 
             style = {{ height : profilePicHeight, width : profilePicHeight, borderRadius : profilePicHeight * 0.5, borderWidth : 5, borderColor :'white'}}
             />
             <Text style = {{color : 'white', fontFamily : 'Gotham-Bold', fontSize : 20, marginTop : 20}}> {Name}</Text>
             <Text style = {{color : 'white', fontFamily : 'Gotham-Bold', fontSize : 15}} > {Email} </Text>
        </View>
    )
}
export default DrawerHeader