import React,{ Component } from 'react';
import{
    View,SafeAreaView,Text,TextInput,StyleSheet,Button, TouchableOpacity,Image
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import TextInputView from '../Helper/textinputview';
import ButtonView from '../Helper/buttonview';

export class RegisterView extends Component
{
    render()
    {
        const genderOptions = [
            {
                label : 'malekey',
                value  : 'Male'
            },
            {
                label : 'femalekey',
                value : 'Female'
            }
        ];
        return(
            <SafeAreaView style = {styles.maincontainerStyle}>
                <View style = {styles.containerStyle}>
                    <Text style = {styles.textStyle}>NeoSTORE</Text>
                    <TextInputView placeholder = 'First Name' source = {require('../Resources/user.png')}/>
                    <TextInputView placeholder = 'Last Name' source = {require('../Resources/user.png')}/>
                    <TextInputView placeholder = 'Email' source = {require('../Resources/email.png')}/>
                    <TextInputView placeholder = 'Password' source = {require('../Resources/password.png')}/>
                    <TextInputView placeholder = 'Confirm Password' source = {require('../Resources/password.png')}/>
                    <TextInputView placeholder = 'Phone Number' source = {require('../Resources/phone.png')}/>

                    <View style = {styles.labelinputcontainerStyle} >
                        <CheckBox
                        style = {{
                        height : 25,
                        width : 25}}
                        color = 'white'
                        borderColor = 'white' 
                        onCheckColor = 'white' 
                        tintColor = 'white'
                        boxType = 'square'
                        onTintColor = 'white'
                        alignSelf = 'center'
                        alignItems = 'center'/>
                        <Text style={{alignSelf:'center', alignItems :'center',
                        justifyContent:'flex-start',
                        color:'white',
                        fontSize : 15,
                        textAlign : 'center',
                        textAlignVertical : 'center',
                        marginLeft : 10,
                        fontWeight : 'bold'}}>I agree the Terms and Conditions</Text>
                    </View>
                    <ButtonView title = 'REGISTER'/>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create(
    {
        maincontainerStyle : {
            backgroundColor :'#e91b1a',
            padding : 20,
            height : '100%',
            width : '100%',
        },
        containerStyle : {
            padding : 20,
            justifyContent : 'center',
        },
        textStyle : {
            color : 'white',
            fontStyle : 'normal',
            fontWeight : 'bold',
            fontSize : 40,
            marginBottom : 10,
            justifyContent : 'center',
            alignSelf : 'center',
            alignItems : 'center'
        },
        buttonStyle : {
            elevation : 1,
            backgroundColor : '#e91b1a',
            color : 'white',
            alignSelf : 'center',
            width : '100%',
        },
        textinputcontainerStyle : {
            elevation : 10,
            flexDirection : 'row',
            borderColor :'white',
            padding : 5,
            borderWidth : 1,
            justifyContent : 'center',
            flexDirection : 'row',
            backgroundColor : '#e91b1a',
            margin : 10
        },
        buttontextStyle : {
            color : '#e91b1a',
            backgroundColor : 'white',
            fontStyle : 'normal',
            fontWeight : 'bold',
            fontSize : 25,
            borderRadius : 10,
            padding : 15,
            alignItems : 'center',
            justifyContent : 'center',
            textAlign : 'center',
        },
        imageStyle: {
            padding: 10,
            margin: 10,
            marginBottom : 5,
            height: 25,
            width: 25,
            resizeMode: 'stretch',
            alignItems : 'center'
          },
          logoimageStyle: {
            height: 180,
            width: 180,
            margin : 10,
            resizeMode: 'center',
            alignItems : 'center',
            alignSelf : 'center',
            justifyContent : 'center'
          },
          labelinputcontainerStyle : {
            elevation : 10,
            flexDirection : 'row',
            padding : 5,
            justifyContent : 'flex-start',
            flexDirection : 'row',
            backgroundColor : '#e91b1a',
            margin : 10,
            fontWeight : 'bold',
            fontSize : 16
        },
    }
)