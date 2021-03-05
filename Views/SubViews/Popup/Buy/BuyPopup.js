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
    ScrollView,
    KeyboardAvoidingView
} from "react-native"

const BuyPopup = (props) => 
{
    useEffect (()=> 
    {
        
    }, [])
    
    const [quantity, setQuantity] = useState('')
    return (
        
        <KeyboardAvoidingView 
        style={BuyPopupStyle.container1} 
        contentContainerStyle={BuyPopupStyle.container1} 
        behavior={'padding'}
        
        >
        <Modal
        animationType="fade"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => props.OnClose(quantity)}
        style = {{justifyContent : 'center', alignItems : 'center'}}
        >
        <View
        style = {BuyPopupStyle.blurBg}>
        </View>
        <ScrollView
        contentContainerStyle = {{paddingTop : 64}}>
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
            setQuantity(text)
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
        
        </ScrollView>
        </Modal>
        </KeyboardAvoidingView>
        
        )
    }
    export default BuyPopup