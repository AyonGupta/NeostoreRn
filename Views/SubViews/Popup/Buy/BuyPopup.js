import React, { useEffect, useState } from "react"
import BuyPopupStyle from "./BuyPopup.style";
import 
{
    TextInput,
    View,
    Modal,
    Image,
    Text,
    TouchableOpacity,
    SafeAreaView,
    KeyboardAvoidingView
} from "react-native"

const BuyPopup = (props) => 
{
    useEffect (()=> 
    {
        
    }, [])
    
    const [quantity, setQuantity] = useState('')
    return (
       <KeyboardAvoidingView style={BuyPopupStyle.container1} contentContainerStyle={BuyPopupStyle.container1} behavior={'position'}>
        <Modal
        animationType="fade"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => props.OnClose(quantity)}
        style = {{justifyContent : 'center', alignItems : 'center'}}
        >
        <View
        style = {BuyPopupStyle.bg}>
        <View
        style = {BuyPopupStyle.container}>
        <Text
        style = {BuyPopupStyle.title}> {props.name} </Text>
        <View
        style = {BuyPopupStyle.imageborder}>
        <Image
        style = {BuyPopupStyle.image}
        source = {
            {
                uri : props.image
            }
        }>
        
        </Image>
        </View>
        
        <Text
        style = {BuyPopupStyle.enterQty}
        >
        Entery Qty
        </Text>
        <View
        style = {BuyPopupStyle.qtyBorder}>
        <TextInput
        style = {BuyPopupStyle.qty}
        keyboardType = 'number-pad'
        onChangeText = {(text) => {
            console.log (text)
        }}/>
        </View>
        
        <TouchableOpacity
        onPress = {() => props.OnClose(quantity)}
        style = {BuyPopupStyle.buyView}>
        <Text
        style = {BuyPopupStyle.buynowText}
        >
        SUBMIT</Text>
        </TouchableOpacity>
        
        </View>
        </View>
        
        </Modal>
        </KeyboardAvoidingView>
        )
    }
    export default BuyPopup