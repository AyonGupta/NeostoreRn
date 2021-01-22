import React,{ Component } from 'react';
import{
    View,SafeAreaView,Text,TextInput,StyleSheet,Button, TouchableOpacity,Image
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import TextInputView from '../Helper/textinputview';
import ButtonView from '../Helper/buttonview';
import RadioForm from 'react-native-simple-radio-button';

export class RegisterView extends Component
{
    render()
    {
        const genderOptions = [
            {
                label : 'Male',
                value  : '1'
            },
            {
                label : 'Female',
                value : '0'
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
                    <View style = {{alignItems : 'center', flexDirection : 'row',justifyContent : 'flex-start',width : '100%'}}>
                        <Text style = {styles.radiolabelStyle}>Gender</Text>
                        <RadioForm radio_props = {genderOptions} 
                        formHorizontal={true} initial={0}
                        buttonInnerColor='white' 
                        buttonOuterColor='white' 
                        labelColor = 'white' 
                        buttonColor = 'white' 
                        selectedButtonColor = 'white'
                        buttonSize={15}
                        buttonOuterSize={25}
                        labelStyle = {{position: 'relative',margin : 3,alignSelf : 'center',fontSize : 15} }
                        selectedLabelColor = 'white'/>
                    </View>
                    

                    <TextInputView placeholder = 'Phone Number' source = {require('../Resources/phone.png')}/>

                    <View style = {styles.labelinputcontainerStyle} >
                        <CheckBox
                        style = {{
                        height : 20,
                        width : 20,marginLeft : 10}}
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
            padding : 10,
            height : '100%',
            width : '100%',
        },
        containerStyle : {
            padding : 10,
            justifyContent : 'center',
        },
        textStyle : {
            color : 'white',
            fontStyle : 'normal',
            fontWeight : 'bold',
            fontSize : 35,
            marginBottom : 5,
            justifyContent : 'center',
            alignSelf : 'center',
            alignItems : 'center'
        },
          labelinputcontainerStyle : {
            elevation : 10,
            flexDirection : 'row',
            padding : 5,
            justifyContent : 'flex-start',
            flexDirection : 'row',
            backgroundColor : '#e91b1a',
            margin : 2,
            fontWeight : 'bold',
            fontSize : 16
        },
        radiolabelStyle : {
            color : 'white',
            borderRadius : 5,
            fontSize : 15,
            fontWeight : 'bold',
            textAlignVertical : 'center',
            justifyContent : 'flex-start',
            margin : 10,
            marginRight : 50
        },
    }
)