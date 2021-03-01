
import React from "react"
import 
{
    TouchableOpacity,
    Text,
    StyleSheet,
    StatusBar
} from "react-native";
const DrawerItem = ({ item, onPress, style }) => 
{
    return (
        <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
        );
}
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
        },
        item: {
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
        },
        title: {
            fontSize: 32,
        },
    });
    
    export default DrawerItem 