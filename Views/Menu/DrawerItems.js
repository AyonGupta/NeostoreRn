
import React from "react"
import 
{
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
    View
} from "react-native";
const DrawerItem = ({ item, onPress, style }) => 
{
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
        </TouchableOpacity>

        );
}
    
    const styles = StyleSheet.create({
        item: {
            // padding: 20,
            // marginVertical: 8,
            // marginHorizontal: 16,
            flexDirection : 'row',
            padding : 10,
        },
        title: {
            fontSize: 20,
            fontFamily : 'Gotham-Bold',
            color : 'white',
            padding : 5
        },
    });
    
    export default DrawerItem 