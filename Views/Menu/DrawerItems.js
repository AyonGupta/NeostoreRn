
import React, { useEffect } from "react"
import 
{
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
    View
} from "react-native";
import * as ColorConstant from "../../Utilities/Constants/ColorConstant";
import * as FontConstant from "../../Utilities/Constants/FontConstant";

const DrawerItem = ({ item, onPress, style }) => 
{
    useEffect (()=> 
    {
        console.log(item)
    }, [])
    return (
        <TouchableOpacity 
        onPress={onPress} 
        style={[styles.item, style]}
        >
           <View style = {{justifyContent : 'center', alignItems : 'center'}}>
           <Image style = {{height : 25, width : 25, marginHorizontal : 15, resizeMode : 'contain'}}
           source = {item.icon}/>
           </View>
        <Text style={styles.title}>{item.title}</Text>
        
        {item.badge > 0 && 
        <View
        style = {styles.badge}>
            <Text
            style = {styles.badgeText}>
                {item.badge.toString()}
            </Text>
        </View>
        }
        </TouchableOpacity>

        );
}
    
    const styles = StyleSheet.create({
        item: {
            // padding: 20,
            // marginVertical: 8,
            // marginHorizontal: 16,
            flexDirection : 'row',
            alignItems : 'center',
            padding : 10,
        },
        title: {
            fontSize: 20,
            fontFamily : 'Gotham-Bold',
            color : 'white',
            padding : 5
        },
        badge : 
        {
            height : 30,
            width : 30,
            borderRadius : 15,
            backgroundColor : ColorConstant.APP_BG,
            position : 'absolute',
            right : 10,
            margin : 5,
            justifyContent : 'center',
            alignItems : 'center'
        },
        badgeText : 
        {
            fontFamily : FontConstant.GOTHAM_BOLD,
            fontSize : 15,
            color : ColorConstant.WHITE
        }
    });
    
    export default DrawerItem 